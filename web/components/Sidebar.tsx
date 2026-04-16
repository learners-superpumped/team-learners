import treeJson from "../app/_data/tree.json";
import TreeNode, { type TreeNodeData } from "./TreeNode";

const tree = treeJson as unknown as TreeNodeData[];

export default function Sidebar() {
  return (
    <div className="px-4 py-6 md:py-8 mono text-[13px]" style={{ color: "var(--fg)" }}>
      <a
        href="/"
        className="block px-2 py-1 mb-3 font-semibold"
        style={{ color: "var(--fg)" }}
      >
        team-learners
      </a>
      <div style={{ color: "var(--muted)", fontSize: "11px" }} className="px-2 mb-2">
        viewer over learners-superpumped/team-learners
      </div>
      <ul className="mt-2">
        {tree.map((node) => (
          <TreeNode key={node.path} node={node} depth={0} defaultOpen={true} />
        ))}
      </ul>
    </div>
  );
}
