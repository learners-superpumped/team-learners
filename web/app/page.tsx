import FileView from "@/components/FileView";
import PathLabel from "@/components/PathLabel";
import filesJson from "./_data/files.json";

type FileEntry = { kind: "markdown" | "code" | "text"; content: string; sizeBytes: number };
type FilesIndex = Record<string, FileEntry>;
const files = filesJson as unknown as FilesIndex;

const ROOT_FILE = "README.md";

export default function HomePage() {
  const entry = files[ROOT_FILE];
  if (!entry) {
    return (
      <div>
        <PathLabel path={ROOT_FILE} />
        <p style={{ color: "var(--muted)" }}>README.md not found.</p>
      </div>
    );
  }
  return (
    <div>
      <PathLabel path={ROOT_FILE} />
      <FileView path={ROOT_FILE} entry={entry} />
    </div>
  );
}
