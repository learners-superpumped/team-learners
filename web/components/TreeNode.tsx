"use client";

import { useState } from "react";
import Link from "next/link";

export type TreeNodeData =
  | { kind: "dir"; name: string; path: string; children: TreeNodeData[] }
  | {
      kind: "file";
      name: string;
      path: string;
      sizeBytes: number;
      ext: string;
    };

function indent(depth: number): React.CSSProperties {
  return { paddingLeft: `${depth * 14 + 8}px` };
}

export default function TreeNode({
  node,
  depth,
  defaultOpen,
}: {
  node: TreeNodeData;
  depth: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(
    // Open root level by default; deeper levels closed unless explicitly forced.
    defaultOpen ?? depth < 1
  );

  if (node.kind === "dir") {
    return (
      <li>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left py-[2px] hover:opacity-70 cursor-pointer"
          style={indent(depth)}
        >
          <span style={{ width: 12, display: "inline-block", color: "var(--muted)" }}>
            {open ? "▾" : "▸"}
          </span>
          <span style={{ marginLeft: 4 }}>{node.name}/</span>
        </button>
        {open && (
          <ul>
            {node.children.map((child) => (
              <TreeNode key={child.path} node={child} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={`/${node.path}`}
        className="block py-[2px] hover:opacity-70"
        style={indent(depth)}
      >
        <span style={{ width: 12, display: "inline-block" }} />
        <span style={{ marginLeft: 4 }}>{node.name}</span>
      </Link>
    </li>
  );
}
