export default function PathLabel({ path }: { path: string }) {
  return (
    <div
      className="mono"
      style={{
        color: "var(--accent)",
        fontSize: "12px",
        marginBottom: "1.25rem",
        wordBreak: "break-all",
      }}
    >
      {path}
    </div>
  );
}
