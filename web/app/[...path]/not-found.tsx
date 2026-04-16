export default function NotFound() {
  return (
    <div className="mono" style={{ color: "var(--muted)" }}>
      <p>File not found.</p>
      <p style={{ marginTop: "0.5rem" }}>
        The path you requested is not in this repo, or it's excluded from the
        viewer (e.g. a binary, a build artifact, or an env file). Pick a file
        from the sidebar.
      </p>
    </div>
  );
}
