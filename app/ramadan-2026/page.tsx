import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORTED_COUNTRIES } from "@/lib/types";
import AdSlot from "@/components/AdSlot";
import { buildFaqSchema } from "@/lib/seo-helpers";
import DayCounter from "@/components/DayCounter";
import type { DayMilestone } from "@/components/DayCounter";

const BASE_URL = "https://printablecalendars.app";

// Ramadan 2026: approx Feb 18 – Mar 19, 2026
// Ramadan 2027: approx Feb 7 – Mar 8, 2027
const RAMADAN_2026 = {
  start: "February 18, 2026",
  end: "March 19, 2026",
  startMonth: 2,
  endMonth: 3,
  year: 2026,
  eidAlFitr: "March 20, 2026",
  daysCount: 29,
};
const RAMADAN_2027 = {
  start: "February 7, 2027",
  end: "March 8, 2027",
  startMonth: 2,
  endMonth: 3,
  year: 2027,
  eidAlFitr: "March 9, 2027",
  daysCount: 29,
};

export const metadata: Metadata = {
  title: "Ramadan Calendar 2026 — Free Printable PDF",
  description:
    "Ramadan 2026 dates: February 18 – March 19, 2026. Download a free printable calendar for Ramadan 2026. Plan your fasting schedule, prayer times, and Eid al-Fitr.",
  keywords: [
    "Ramadan calendar 2026",
    "Ramadan 2026 dates",
    "Ramadan printable calendar",
    "Ramadan schedule 2026",
    "when is Ramadan 2026",
    "Eid al-Fitr 2026",
    "fasting calendar 2026",
  ],
  alternates: { canonical: `${BASE_URL}/ramadan-2026` },
  openGraph: {
    title: "Ramadan Calendar 2026 — Free Printable PDF",
    description:
      "Ramadan 2026: February 18 – March 19. Download a free printable monthly calendar to plan your fasting month.",
    url: `${BASE_URL}/ramadan-2026`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramadan Calendar 2026 | PrintableCalendars",
    description: "Ramadan 2026 dates and free printable calendars for February and March 2026.",
  },
  robots: { index: true, follow: true },
};

const RAMADAN_MILESTONES: DayMilestone[] = [
  { min: 0, max: 0, message: "Eid Mubarak!" },
  { min: 1, max: 9, message: "The final days — Laylat al-Qadr is near.", tip: "Increase worship in the last odd nights." },
  { min: 10, max: 19, message: "The middle third — stay consistent.", tip: "Increase Quran recitation in the last 10 days." },
  { min: 20, max: 99999, message: "The month of reflection has begun.", tip: "Set your intention (niyyah) each night." },
];

// ── Ramadan day labels ────────────────────────────────────────────────────────
const FEB_DAY_LABELS: Record<string, string> = {
  "2026-02-18": "R1",  "2026-02-19": "R2",  "2026-02-20": "R3",
  "2026-02-21": "R4",  "2026-02-22": "R5",  "2026-02-23": "R6",
  "2026-02-24": "R7",  "2026-02-25": "R8",  "2026-02-26": "R9",
  "2026-02-27": "R10", "2026-02-28": "R11",
};

const MAR_DAY_LABELS: Record<string, string> = {
  "2026-03-01": "R12", "2026-03-02": "R13", "2026-03-03": "R14",
  "2026-03-04": "R15", "2026-03-05": "R16", "2026-03-06": "R17",
  "2026-03-07": "R18", "2026-03-08": "R19", "2026-03-09": "R20",
  "2026-03-10": "R21", "2026-03-11": "R22", "2026-03-12": "R23",
  "2026-03-13": "R24", "2026-03-14": "R25", "2026-03-15": "R26",
  "2026-03-16": "★R27", // Laylat al-Qadr candidate
  "2026-03-17": "R28",
  "2026-03-18": "★R29", // Laylat al-Qadr candidate
  "2026-03-19": "R30",
  "2026-03-20": "Eid",
};

function buildRamadanPdfUrl(country: string, month: 2 | 3): string {
  const params = new URLSearchParams({
    country,
    year: "2026",
    month: String(month),
    size: "A4",
    orientation: "landscape",
    theme: "light",
    headerText: month === 2 ? "Ramadan 2026" : "Ramadan 2026 · Eid al-Fitr",
    targetDate: "2026-03-20",
    targetLabel: "Eid al-Fitr",
    dayLabels: JSON.stringify(month === 2 ? FEB_DAY_LABELS : MAR_DAY_LABELS),
  });
  return `/api/pdf?${params.toString()}`;
}

const RAMADAN_FAQS = [
  {
    q: "When is Ramadan 2026?",
    a: "Ramadan 2026 is expected to begin around February 18, 2026 and end around March 19, 2026. Eid al-Fitr is anticipated around March 20, 2026. The exact start date depends on the moon sighting and may vary by one to two days depending on location.",
  },
  {
    q: "Can I download a Ramadan 2026 calendar printable for free?",
    a: "Yes. Calendars for February and March 2026 — the two months that span Ramadan — are available as free A4 landscape PDFs. Click the PDF button next to your country to download instantly with no account required.",
  },
  {
    q: "What are the Ramadan 2026 dates I should mark on my calendar?",
    a: "Mark February 18, 2026 as the first day of fasting (subject to moon sighting), March 19, 2026 as the last day of Ramadan, and March 20, 2026 as the approximate date of Eid al-Fitr. The Laylat al-Qadr (Night of Power) falls in the last ten nights, most likely March 15 or 17.",
  },
  {
    q: "When is Ramadan 2027?",
    a: "Ramadan 2027 is expected to run from approximately February 7 to March 8, 2027. Because the Islamic calendar is lunar, Ramadan shifts about 10–11 days earlier each year on the Gregorian calendar.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ramadan Calendar 2026 — Free Printable PDF",
  description: "Ramadan 2026 dates and free printable calendar download.",
  url: `${BASE_URL}/ramadan-2026`,
};

export default function Ramadan2026Page() {
  const faqSchema = buildFaqSchema(RAMADAN_FAQS.map((f) => ({ q: f.q, a: f.a })));
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

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px" }}>
        <AdSlot slot="top-banner" style={{ marginBottom: 32 }} />

        {/* Hero */}
        <div style={{ marginBottom: 56 }}>
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
            Islamic Calendar · 2026
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
            Ramadan Calendar 2026
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, maxWidth: 560 }}>
            Ramadan 2026 runs from approximately{" "}
            <strong style={{ color: "var(--fg)" }}>
              {RAMADAN_2026.start}
            </strong>{" "}
            to{" "}
            <strong style={{ color: "var(--fg)" }}>
              {RAMADAN_2026.end}
            </strong>
            , with Eid al-Fitr celebrated around{" "}
            <strong style={{ color: "var(--fg)" }}>{RAMADAN_2026.eidAlFitr}</strong>. Download
            free printable calendars for February and March 2026 to plan your
            fasting schedule.
          </p>
          <p
            style={{
              fontSize: 12,
              color: "var(--muted)",
              marginTop: 12,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.03em",
            }}
          >
            Note: exact start date depends on the moon sighting and may vary by 1–2 days by location.
          </p>
        </div>

        <DayCounter
          targetLabel="End of Ramadan (Eid)"
          storageKey="ramadan-start"
          milestones={RAMADAN_MILESTONES}
          defaultDate="2026-03-20"
        />

        {/* Key dates */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "24px 28px",
            marginBottom: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
          }}
        >
          {[
            ["First day of Ramadan", RAMADAN_2026.start],
            ["Last day of Ramadan", RAMADAN_2026.end],
            ["Eid al-Fitr (approx.)", RAMADAN_2026.eidAlFitr],
            ["Duration", `${RAMADAN_2026.daysCount} days (29 or 30)`],
          ].map(([label, value]) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "var(--muted)",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {label}
              </p>
              <p style={{ fontSize: 16, fontWeight: 500, color: "var(--holiday)" }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Calendar downloads */}
        <section style={{ marginBottom: 56 }}>
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
            Download Ramadan 2026 Calendars
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { month: RAMADAN_2026.startMonth, label: "February 2026", note: "Start of Ramadan" },
              { month: RAMADAN_2026.endMonth, label: "March 2026", note: "End of Ramadan · Eid al-Fitr" },
            ].map(({ month, label, note }) => (
              <div
                key={month}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "18px 20px",
                }}
              >
                <div style={{ marginBottom: 14 }}>
                  <p style={{ fontSize: 15, fontWeight: 500 }}>{label}</p>
                  <p style={{ fontSize: 12, color: "var(--holiday)", fontFamily: "'DM Mono', monospace" }}>
                    {note}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {SUPPORTED_COUNTRIES.map((c) => (
                    <div key={c.code} style={{ display: "flex", gap: 6 }}>
                      <Link
                        href={`/calendar/${c.code.toLowerCase()}/${RAMADAN_2026.year}/${month}`}
                        style={{
                          padding: "7px 14px",
                          background: "var(--fg)",
                          color: "var(--bg)",
                          borderRadius: 6,
                          textDecoration: "none",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        {c.name}
                      </Link>
                      <a
                        href={buildRamadanPdfUrl(c.code.toLowerCase(), month as 2 | 3)}
                        download={`ramadan-calendar-${c.code.toLowerCase()}-2026-${String(month).padStart(2, "0")}.pdf`}
                        style={{
                          padding: "7px 14px",
                          border: "1px solid var(--border)",
                          color: "var(--fg)",
                          borderRadius: 6,
                          textDecoration: "none",
                          fontSize: 12,
                        }}
                      >
                        PDF
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdSlot slot="pre-download" style={{ marginBottom: 48 }} />

        {/* About Ramadan */}
        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 20,
            }}
          >
            About Ramadan
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 700 }}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg)" }}>
              Ramadan is the ninth month of the Islamic lunar calendar and the
              holiest period in Islam. During Ramadan, Muslims around the world
              observe a fast from before sunrise (Fajr) to sunset (Maghrib),
              abstaining from food, drink, and other physical needs. The month
              is also marked by increased prayer, Quran recitation, charitable
              giving (Zakat), and community gatherings for the pre-dawn meal
              (Suhoor) and the breaking of the fast (Iftar).
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg)" }}>
              Ramadan ends with Eid al-Fitr — the &quot;Festival of Breaking the
              Fast&quot; — a joyful celebration marked by communal prayers, feasting,
              gift-giving, and charity. Because the Islamic calendar is lunar,
              Ramadan shifts approximately 10–11 days earlier each year on the
              Gregorian calendar.
            </p>
          </div>
        </section>

        {/* 2027 preview */}
        <section
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 40,
          }}
        >
          <h2
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Planning ahead — Ramadan 2027
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginBottom: 20 }}>
            Ramadan 2027 is expected to begin around{" "}
            <strong style={{ color: "var(--fg)" }}>{RAMADAN_2027.start}</strong> and end around{" "}
            <strong style={{ color: "var(--fg)" }}>{RAMADAN_2027.end}</strong>, with Eid al-Fitr
            around <strong style={{ color: "var(--fg)" }}>{RAMADAN_2027.eidAlFitr}</strong>.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[RAMADAN_2027.startMonth, RAMADAN_2027.endMonth].map((m) => (
              SUPPORTED_COUNTRIES.map((c) => (
                <Link
                  key={`${c.code}-${m}`}
                  href={`/calendar/${c.code.toLowerCase()}/${RAMADAN_2027.year}/${m}`}
                  style={{
                    fontSize: 12,
                    padding: "6px 14px",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    textDecoration: "none",
                    color: "var(--muted)",
                  }}
                >
                  {new Date(2000, m - 1).toLocaleString("en-US", { month: "long" })} {RAMADAN_2027.year} · {c.code}
                </Link>
              ))
            ))}
          </div>
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
            {RAMADAN_FAQS.map((faq, i) => (
              <div
                key={i}
                style={{ borderTop: "1px solid var(--border)", paddingTop: 20, paddingBottom: 20 }}
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
