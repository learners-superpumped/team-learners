import { marked } from "marked";

// Parse synchronously and preserve raw <pre> blocks. No syntax highlighter.
marked.setOptions({
  gfm: true,
  breaks: false,
});

export default function Markdown({ source }: { source: string }) {
  const html = marked.parse(source, { async: false }) as string;
  return (
    <article
      className="prose"
      // Source is from this repo only — no untrusted input. Safe to set HTML.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
