import Markdown from "./Markdown";

type FileEntry = {
  kind: "markdown" | "code" | "text";
  content: string;
  sizeBytes: number;
};

const EXT_TO_LANG: Record<string, string> = {
  ".ts": "typescript",
  ".tsx": "tsx",
  ".js": "javascript",
  ".jsx": "jsx",
  ".json": "json",
  ".css": "css",
  ".toml": "toml",
  ".yaml": "yaml",
  ".yml": "yaml",
};

function langForPath(p: string): string {
  const dot = p.lastIndexOf(".");
  if (dot === -1) return "text";
  const ext = p.slice(dot).toLowerCase();
  return EXT_TO_LANG[ext] ?? "text";
}

export default function FileView({
  path,
  entry,
}: {
  path: string;
  entry: FileEntry;
}) {
  if (entry.kind === "markdown") {
    return <Markdown source={entry.content} />;
  }
  const lang = entry.kind === "code" ? langForPath(path) : "text";
  return (
    <pre className="code-file">
      <code className={`lang-${lang}`}>{entry.content}</code>
    </pre>
  );
}
