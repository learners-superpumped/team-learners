import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // The viewer reads files from the parent of `web/` (the plugin root).
  // Tell Next to trace one level up so the production bundle includes them.
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
