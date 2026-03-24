import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UniCircle Connect — Jaden Rones",
  description:
    "AI-powered university club recruitment platform. Built solo as founder using React, Supabase, and the Anthropic Claude API. Automates applicant screening at scale.",
}

export default function UniCircleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
