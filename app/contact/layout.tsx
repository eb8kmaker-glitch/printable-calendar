import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — PrintableCalendars",
  description:
    "Report a wrong holiday date, suggest a feature, or ask a question. We read every message.",
  alternates: { canonical: "https://printablecalendars.app/contact" },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
