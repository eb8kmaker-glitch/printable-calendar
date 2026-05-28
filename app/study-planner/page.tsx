import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import AdSlot from "@/components/AdSlot";
import { buildFaqSchema } from "@/lib/seo-helpers";
import DayCounter from "@/components/DayCounter";
import type { DayMilestone } from "@/components/DayCounter";

const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Free Printable Study Planner Calendars — PDF Download",
  description:
    "Download free printable monthly study planner calendars. Track assignments, exam dates, and deadlines. Clean A4 PDF design, no login required.",
  keywords: [
    "printable study planner",
    "study calendar PDF",
    "printable planner for students",
    "monthly study schedule",
    "exam planner printable",
    "free study calendar 2026",
  ],
  alternates: { canonical: `${BASE_URL}/study-planner` },
  openGraph: {
    title: "Free Printable Study Planner Calendars | PrintableCalendars",
    description:
      "Monthly calendars for students — track assignments, exams, and deadlines. Instant PDF download.",
    url: `${BASE_URL}/study-planner`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Printable Study Planner Calendars | PrintableCalendars",
    description: "Monthly study calendars with holidays — free PDF download for students.",
  },
  robots: { index: true, follow: true },
};

const STUDY_MILESTONES: DayMilestone[] = [
  { min: 0, max: 0, message: "Exam day. You've got this." },
  { min: 1, max: 6, message: "Almost there — stay calm, trust your prep.", tip: "Light review only. Rest is productive." },
  { min: 7, max: 13, message: "One week out — review, don't learn new material.", tip: "Simulate exam conditions at least once." },
  { min: 14, max: 29, message: "Final stretch — active recall every day.", tip: "Sleep matters more than extra hours now." },
  { min: 30, max: 59, message: "Halfway there — review weak areas first.", tip: "Practice tests are more effective than re-reading." },
  { min: 60, max: 99999, message: "Plenty of time — build your schedule now.", tip: "Study 1–2 hours daily beats cramming." },
];

const STUDY_FAQS = [
  {
    q: "What is a printable study planner 2026?",
    a: "A printable study planner is a monthly calendar you download as a PDF and print at home. It gives you a physical grid to write in exam dates, assignment deadlines, and study blocks — without needing an app or an account.",
  },
  {
    q: "How do I use a free study schedule template effectively?",
    a: "Start by filling in fixed commitments: exam dates, submission deadlines, and class times. Then work backwards to schedule study blocks. Print one month at a time so you can annotate directly on paper. Many students colour-code by subject.",
  },
  {
    q: "Do the study planner calendars include public holidays?",
    a: "Yes. Every calendar includes official public holidays for your chosen country (USA, UK, Australia, Canada, Japan, or South Korea), so you never accidentally schedule a study session on a day your library or campus is closed.",
  },
  {
    q: "Can I download a study planner for a specific month?",
    a: "Yes. Choose any month and country from the grid above, then click View to preview or PDF to download instantly. No login or payment is required.",
  },
  {
    q: "What paper size are the study planner PDFs?",
    a: "All calendars download as A4 landscape PDF. They also print well on US Letter paper with minimal scaling. The clean, minimal design works in both colour and black-and-white.",
  },
];

const STUDY_TIPS = [
  ["Block exam weeks first", "Add exam dates as soon as they are announced. Everything else schedules around them."],
  ["Plan in monthly chunks", "A monthly calendar gives you the right resolution — detailed enough to plan, broad enough to see the whole semester."],
  ["Use the margins", "Our calendars have clean margins. Write deadlines, readings, or study goals directly on the printed sheet."],
  ["Print black and white", "Our minimal design is optimised for B&W printing — saves ink, stays readable."],
  ["One calendar per subject", "Some students print a calendar per course and annotate separately, then combine into a master view."],
  ["Leave buffer weeks", "Block the week before every major exam or deadline as review time — not new-content time."],
];

export default function StudyPlannerPage() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const upcomingMonths = Array.from({ length: 6 }, (_, i) => {
    const m = ((month - 1 + i) % 12) + 1;
    const y = year + Math.floor((month - 1 + i) / 12);
    return { month: m, year: y, name: MONTH_NAMES[m - 1] };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Printable Study Planner Calendars",
    description: "Monthly calendars for students to track exams, assignments, and deadlines.",
    url: `${BASE_URL}/study-planner`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Study Planner", item: `${BASE_URL}/study-planner` },
      ],
    },
  };

  const faqSchema = buildFaqSchema(STUDY_FAQS.map((f) => ({ q: f.q, a: f.a })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        <AdSlot slot="top-banner" style={{ marginBottom: 32 }} />

        {/* Hero */}
        <div style={{ marginBottom: 64, maxWidth: 620 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            For Students
          </p>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Printable study planner
            <br />
            <span style={{ opacity: 0.4 }}>calendars, free forever.</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
            Monthly calendars designed for students. Map out your semester —
            exams, deadlines, readings, and study blocks — on a clean A4
            printout you can write on. Includes public holidays for USA, Japan,
            and South Korea. No account required.
          </p>
          <Link
            href={`/calendar/us/${year}/${month}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: "var(--fg)",
              color: "var(--bg)",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            View this month →
          </Link>
        </div>

        <DayCounter
          targetLabel="Exam Date"
          storageKey="exam-date"
          milestones={STUDY_MILESTONES}
        />

        {/* Upcoming months grid */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Download by month
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {upcomingMonths.map(({ month: m, year: y, name }) => (
              <div
                key={`${y}-${m}`}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                    marginBottom: 8,
                  }}
                >
                  {name} {y}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {SUPPORTED_COUNTRIES.map((c) => {
                    const pdfUrl = `/api/pdf?country=${c.code.toLowerCase()}&year=${y}&month=${m}&size=A4&orientation=landscape&theme=light`;
                    return (
                      <div key={c.code} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <Link
                          href={`/calendar/${c.code.toLowerCase()}/${y}/${m}`}
                          style={{
                            fontSize: 12,
                            padding: "5px 12px",
                            border: "1px solid var(--border)",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "var(--fg)",
                          }}
                        >
                          {c.code}
                        </Link>
                        <a
                          href={pdfUrl}
                          download={`study-calendar-${c.code.toLowerCase()}-${y}-${String(m).padStart(2, "0")}.pdf`}
                          style={{
                            fontSize: 11,
                            padding: "5px 10px",
                            border: "1px solid var(--border)",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "var(--muted)",
                          }}
                        >
                          PDF
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdSlot slot="pre-download" style={{ marginBottom: 48 }} />

        {/* Study tips */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 32,
            }}
          >
            How to use a printed study calendar
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {STUDY_TIPS.map(([title, desc]) => (
              <div
                key={title}
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 16,
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 28,
          }}
        >
          {[
            ["A4 landscape PDF", "Print on any home printer. Fits standard letter and A4 paper."],
            ["Public holidays included", "Never miss a holiday exam date — all official holidays shown."],
            ["Minimal design", "Clean grid leaves space for your notes, annotations, and highlights."],
            ["Free, no account", "No sign-up. No email. Just download and print."],
          ].map(([title, desc]) => (
            <div key={title}>
              <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 32,
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STUDY_FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{faq.q}</p>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
