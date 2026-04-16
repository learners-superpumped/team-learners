import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Team Learners",
  description:
    "Team Learners — public surface as a Claude Code plugin. Read every file in the repo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen md:grid-cols-[280px_1fr]">
          <aside
            className="border-b md:border-b-0 md:border-r"
            style={{ borderColor: "var(--border)" }}
          >
            <Sidebar />
          </aside>
          <main className="px-6 py-8 md:px-10 md:py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
