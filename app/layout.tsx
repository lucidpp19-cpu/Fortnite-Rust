import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FortniteRuntime-rs",
  description: "Pure Rust Fortnite runtime launcher and project status.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
