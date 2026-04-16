/**
 * Walks the plugin root (one directory above `web/`) and emits two static
 * artifacts the Next.js routes consume at build time:
 *
 *   app/_data/tree.json   — nested folder tree for the sidebar
 *   app/_data/files.json  — flat map: path -> { kind, content, sizeBytes }
 *
 * Allowlist over denylist (fail-closed). Symlinks are not followed.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

// `__dirname` points at web/scripts/. Repo root is two levels up.
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const WEB_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(WEB_ROOT, "app", "_data");

// What we render. Anything not in here is silently skipped from the tree
// AND not added to files.json (so URLs to it 404).
const ALLOWED_EXTENSIONS = new Set([
  ".md",
  ".json",
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".css",
  ".toml",
  ".yaml",
  ".yml",
]);
const ALLOWED_BARE_FILENAMES = new Set([
  "LICENSE",
  ".gitignore",
  "README",
]);

// Hard-excluded directories. These are never walked, even if a parent is allowed.
const HARD_EXCLUDED_DIRS = new Set([
  "node_modules",
  ".next",
  ".vercel",
  ".git",
  ".DS_Store",
  ".turbo",
  "dist",
  "build",
  "out",
  "_data", // our own output
]);

// Hard-excluded file patterns (regex). Anything matching is dropped before kind detection.
const HARD_EXCLUDED_FILE_PATTERNS: RegExp[] = [
  /^\.env$/i,
  /^\.env\..+$/i,
  /\.env\.local$/i,
  /^\.DS_Store$/,
  /^Thumbs\.db$/i,
];

// Refuse to render anything bigger than this. Large files would bloat files.json.
const MAX_FILE_BYTES = 200 * 1024;

type Kind = "markdown" | "code" | "text";
type FileEntry = { kind: Kind; content: string; sizeBytes: number };
type TreeNode =
  | { kind: "dir"; name: string; path: string; children: TreeNode[] }
  | { kind: "file"; name: string; path: string; sizeBytes: number; ext: string };

function isHardExcludedFile(name: string): boolean {
  return HARD_EXCLUDED_FILE_PATTERNS.some((re) => re.test(name));
}

function fileKindFor(name: string): Kind | null {
  if (ALLOWED_BARE_FILENAMES.has(name)) return "text";
  const ext = path.extname(name).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) return null;
  if (ext === ".md") return "markdown";
  return "code";
}

async function walk(
  absoluteDir: string,
  relativeDir: string
): Promise<TreeNode[]> {
  const entries = await fs.readdir(absoluteDir, { withFileTypes: true });
  const result: TreeNode[] = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.isSymbolicLink()) {
      // Never follow symlinks — could escape into other projects.
      continue;
    }

    if (entry.isDirectory()) {
      if (HARD_EXCLUDED_DIRS.has(entry.name)) continue;
      const childAbs = path.join(absoluteDir, entry.name);
      const childRel = relativeDir ? `${relativeDir}/${entry.name}` : entry.name;
      const children = await walk(childAbs, childRel);
      if (children.length > 0) {
        result.push({
          kind: "dir",
          name: entry.name,
          path: childRel,
          children,
        });
      }
      continue;
    }

    if (!entry.isFile()) continue;
    if (isHardExcludedFile(entry.name)) continue;

    const kind = fileKindFor(entry.name);
    if (!kind) continue;

    const absolutePath = path.join(absoluteDir, entry.name);
    const stat = await fs.stat(absolutePath);
    if (stat.size > MAX_FILE_BYTES) continue;

    const ext = path.extname(entry.name).toLowerCase();
    const childRel = relativeDir ? `${relativeDir}/${entry.name}` : entry.name;
    result.push({
      kind: "file",
      name: entry.name,
      path: childRel,
      sizeBytes: stat.size,
      ext,
    });
  }

  // Folders before files for a familiar IDE-like ordering.
  result.sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === "dir" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return result;
}

async function collectFiles(
  nodes: TreeNode[],
  out: Record<string, FileEntry>
): Promise<void> {
  for (const node of nodes) {
    if (node.kind === "dir") {
      await collectFiles(node.children, out);
      continue;
    }
    const absolutePath = path.join(REPO_ROOT, node.path);
    const buffer = await fs.readFile(absolutePath);
    const content = buffer.toString("utf8");
    const kind: Kind = node.path.endsWith(".md")
      ? "markdown"
      : ALLOWED_BARE_FILENAMES.has(node.name)
      ? "text"
      : "code";
    out[node.path] = {
      kind,
      content,
      sizeBytes: node.sizeBytes,
    };
  }
}

async function main() {
  const startedAt = Date.now();

  const tree = await walk(REPO_ROOT, "");
  const files: Record<string, FileEntry> = {};
  await collectFiles(tree, files);

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUT_DIR, "tree.json"),
    JSON.stringify(tree, null, 2),
    "utf8"
  );
  await fs.writeFile(
    path.join(OUT_DIR, "files.json"),
    JSON.stringify(files, null, 2),
    "utf8"
  );

  const fileCount = Object.keys(files).length;
  const totalBytes = Object.values(files).reduce(
    (sum, f) => sum + f.sizeBytes,
    0
  );
  const elapsed = Date.now() - startedAt;

  console.log(
    `[build-manifest] ${fileCount} files, ${(totalBytes / 1024).toFixed(
      1
    )} KB, ${elapsed}ms`
  );
  console.log(
    `[build-manifest] wrote ${path.relative(WEB_ROOT, OUT_DIR)}/{tree,files}.json`
  );
}

main().catch((err) => {
  console.error("[build-manifest] failed", err);
  process.exit(1);
});
