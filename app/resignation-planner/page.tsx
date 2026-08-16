import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import DynamicCalendarList from "@/components/DynamicCalendarList";
import { CALENDAR_YEARS } from "@/lib/types";
import { buildFaqSchema } from "@/lib/seo-helpers";
import DayCounter from "@/components/DayCounter";
import type { DayMilestone } from "@/components/DayCounter";
import { getLocale } from "@/i18n/server";
import { getTranslations } from "@/i18n";

export const dynamic = "force-dynamic";
const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Resignation Planner — Notice Period & Offboarding Checklist",
  description:
    "Free printable resignation planner. Enter your last working day to get a countdown, stage-by-stage offboarding checklist, and a month-by-month plan for a smooth, professional exit. A4 PDF, no login required.",
  keywords: [
    "resignation planner",
    "resignation checklist",
    "notice period planner",
    "offboarding checklist",
    "quitting job checklist",
    "last day of work countdown",
  ],
  alternates: { canonical: `${BASE_URL}/resignation-planner` },
  openGraph: {
    title: "Resignation Planner — Notice Period & Offboarding Checklist | PrintableCalendars",
    description:
      "Plan a smooth, professional exit month by month — notice, handover, and offboarding — with a free printable countdown calendar.",
    url: `${BASE_URL}/resignation-planner`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resignation Planner — Notice Period & Offboarding Checklist",
    description: "Free printable countdown and offboarding checklist for your last day at work.",
  },
  robots: { index: true, follow: true },
};

export default async function ResignationPlannerPage() {
  const locale = await getLocale();
  const i18n = getTranslations(locale);
  const p = (i18n as unknown as Record<string, Record<string, string>>).resignationPlanner ?? {};
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const RESIGNATION_MILESTONES: DayMilestone[] = [
    { min: 0, max: 0, message: p.ms0msg ?? "Last day.", tip: p.ms0tip ?? "Return company assets, confirm your final pay and documents, update your profiles, and keep your network warm." },
    { min: 1, max: 6, message: p.ms1msg ?? "Final week.", tip: p.ms1tip ?? "Prepare equipment returns, save references and personal contacts, and thank the people you worked with." },
    { min: 7, max: 20, message: p.ms2msg ?? "Wrap up and transfer.", tip: p.ms2tip ?? "Tidy and hand off in-progress work, and schedule knowledge-transfer sessions with whoever takes over." },
    { min: 21, max: 59, message: p.ms3msg ?? "Notice given — start the handover.", tip: p.ms3tip ?? "Solid handover documentation now is what protects your reputation and your references." },
    { min: 60, max: 99999, message: p.ms4msg ?? "Plan your exit.", tip: p.ms4tip ?? "Check your financial runway and your next step first, and stay discreet until you give formal notice." },
  ];

  const HOW_TO_USE_I18N: [string, string][] = [
    [p.step1Title ?? "Print one month at a time", p.step1Body ?? "Start with the current month. Fill in your notice date, handover sessions, and last day as they are confirmed."],
    [p.step2Title ?? "Mark key dates clearly", p.step2Body ?? "Notice date, last working day, and asset-return deadlines are easy to miss — highlight them on the printed sheet."],
    [p.step3Title ?? "Keep it private", p.step3Body ?? "Use the printout for your own planning until you have given formal notice."],
  ];

  const PLANNING_STEPS_I18N: { label: string; body: string }[] = [
    { label: p.plan1Label ?? "Decision & finances", body: p.plan1Body ?? "Confirm your decision and check your runway — living expenses, savings, and your next step — before anything else." },
    { label: p.plan2Label ?? "Formal notice & notice period", body: p.plan2Body ?? "Give notice in writing and confirm your required notice period and last working day." },
    { label: p.plan3Label ?? "Handover documentation", body: p.plan3Body ?? "Write up handover notes and process docs so your work can continue smoothly without you." },
    { label: p.plan4Label ?? "Transfer projects", body: p.plan4Body ?? "Hand off in-progress projects and brief the colleague who will cover them." },
    { label: p.plan5Label ?? "References & contacts", body: p.plan5Body ?? "Ask for a reference or written confirmation of your role, and save work contacts within appropriate limits." },
    { label: p.plan6Label ?? "Return assets & back up files", body: p.plan6Body ?? "Prepare to return company equipment and accounts, and back up your own personal files." },
    { label: p.plan7Label ?? "Final pay, insurance & tax", body: p.plan7Body ?? "Confirm your final pay, insurance, and tax paperwork with HR or the relevant authority — the details differ by country." },
  ];

  const RESIGNATION_FAQS = [
    { q: p.faq1q ?? "What is a resignation planner?", a: p.faq1a ?? "A resignation planner is a printable calendar you use to count down to your last working day and stay on top of offboarding tasks — giving notice, handing over your work, returning assets, and confirming your final pay and documents. Enter your last day to see a countdown and a stage-by-stage checklist." },
    { q: p.faq2q ?? "How much notice should I give?", a: p.faq2a ?? "Notice periods vary by country, contract, and role. Check your employment contract and local rules, and confirm the exact dates with HR. This planner helps you organise the time you have, whatever your notice period is." },
    { q: p.faq3q ?? "How do I leave on good terms?", a: p.faq3a ?? "Give clear written notice, document your work for a smooth handover, transfer in-progress projects, and stay professional through your last day. A well-prepared exit protects your reputation and your references." },
    { q: p.faq4q ?? "What about final pay, insurance, and taxes?", a: p.faq4a ?? "These depend on your country and your employer, so confirm the specifics with HR or the relevant authority. As a general step, make sure you know when your final pay arrives and what happens to your insurance and tax paperwork after your last day." },
  ];
  const faqSchema = buildFaqSchema(RESIGNATION_FAQS.map((f) => ({ q: f.q, a: f.a })));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resignation Planner — Notice Period & Offboarding Checklist",
    description: "A printable countdown and offboarding checklist for your last day at work.",
    url: `${BASE_URL}/resignation-planner`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Resignation Planner", item: `${BASE_URL}/resignation-planner` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        <AdSlot slot="top-banner" style={{ marginBottom: 32 }} />

        {/* Hero */}
        <div style={{ marginBottom: 64, maxWidth: 620 }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            {p.eyebrow ?? "Career Transition"}
          </p>
          <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20 }}>
            {p.title ?? "Resignation planner"}
            <br />
            <span style={{ opacity: 0.4 }}>{p.subtitle ?? "a calm, professional exit."}</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
            {p.description ?? "Count down to your last working day, one step at a time — with a free printable calendar to plan your notice, handover, and offboarding so you leave on good terms."}
          </p>
          <Link
            href={`/calendar/us/${year}/${currentMonth}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--fg)", color: "var(--bg)", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 500 }}
          >
            {p.viewThisMonth ?? "Start this month →"}
          </Link>
        </div>

        <DayCounter
          targetLabel={p.countdownLabel ?? "Last Day at Work"}
          storageKey="resignation-date"
          milestones={RESIGNATION_MILESTONES}
        />

        {/* How to use */}
        <section style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "28px 28px 24px", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            {p.howToUseSection ?? "How to use a printed countdown calendar"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {HOW_TO_USE_I18N.map(([title, desc]) => (
              <div key={title}>
                <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to plan */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 28 }}>
            {p.planningTitle ?? "What to plan before your last day"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PLANNING_STEPS_I18N.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: 24,
                  paddingBottom: 24,
                  marginBottom: 24,
                  borderBottom: i < PLANNING_STEPS_I18N.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--holiday)", letterSpacing: "0.04em" }}>
                    {step.label}
                  </p>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55 }}>{step.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
            {p.legalNote ?? "Final pay, insurance, and tax rules differ by country and employer — always confirm the specifics with HR or the relevant authority."}
          </p>
        </section>

        <DynamicCalendarList
          storageKey="resignation-date"
          maxMonths={12}
          years={CALENDAR_YEARS}
          badgeLabel={p.badgeLabel ?? "Last working month"}
          pdfHeaderText="Resignation Countdown"
          pdfTargetLabel="Last Day"
          noDateHint={p.downloadHint ?? "Enter your last working day above to customize this list."}
        />

        <AdSlot slot="pre-download" style={{ marginBottom: 32 }} />

        {/* FAQ */}
        <section style={{ marginTop: 32, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
          <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 32 }}>
            {p.faqTitle ?? "Frequently asked questions"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {RESIGNATION_FAQS.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--border)", paddingTop: 20, paddingBottom: 20 }}>
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
