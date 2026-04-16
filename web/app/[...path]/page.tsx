import { notFound } from "next/navigation";
import FileView from "@/components/FileView";
import PathLabel from "@/components/PathLabel";
import filesJson from "../_data/files.json";

type FileEntry = { kind: "markdown" | "code" | "text"; content: string; sizeBytes: number };
type FilesIndex = Record<string, FileEntry>;
const files = filesJson as unknown as FilesIndex;

type Params = { path: string[] };

export function generateStaticParams(): Params[] {
  return Object.keys(files).map((p) => ({ path: p.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { path: segments } = await params;
  const joined = segments.join("/");
  return { title: `${joined} — Team Learners` };
}

export default async function FilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { path: segments } = await params;
  const joined = segments.join("/");
  const entry = files[joined];
  if (!entry) notFound();
  return (
    <div>
      <PathLabel path={joined} />
      <FileView path={joined} entry={entry} />
    </div>
  );
}
