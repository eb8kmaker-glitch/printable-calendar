import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORTED_COUNTRIES } from "@/lib/types";
import { buildWebPageSchema } from "@/lib/seo-helpers";

export const dynamic = "force-static";
const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "About PrintableCalendars ??Free Printable Calendar PDFs",
  description:
    "PrintableCalendars makes free, clean printable monthly calendars with public holidays for the USA, Japan, and South Korea. No account required. Download A4 PDF instantly.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About PrintableCalendars",
    description:
      "Free monthly calendars with public holidays for USA, Japan, and South Korea. Clean A4 PDF, no sign-up.",
    url: `${BASE_URL}/about`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  robots: { index: true, follow: true },
};

const webPageSchema = buildWebPageSchema({
  name: "About PrintableCalendars",
  description:
    "PrintableCalendars makes free printable monthly calendars with public holidays for the USA, Japan, and South Korea.",
  url: `${BASE_URL}/about`,
  breadcrumbs: [{ name: "About", item: `${BASE_URL}/about` }],
});

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 96px" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
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
            About
          </p>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            PrintableCalendars
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2.5vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.65,
              fontStyle: "italic",
              fontFamily: "'EB Garamond', Georgia, serif",
            }}
          >
            Free printable calendars. Clean design. Public holidays included.
            No account required.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 56 }} />

        {/* Why this exists */}
        <Section label="Why we built this">
          <p style={prose}>
            Most printable calendar sites either require a login, bury the
            download behind ads, or produce PDFs that look like they were
            generated in 1998. We wanted a calendar that opens fast, looks
            clean, and prints well ??whether you are planning a month at work,
            marking school events for your kids, or just putting something on
            the fridge.
          </p>
          <p style={prose}>
            The public holidays matter too. A calendar without holidays is just
            a grid. We include official public holidays for each supported
            country, pulled from maintained datasets ??so you can see at a
            glance which days offices are closed, which weeks have long
            weekends, and when things like Golden Week or Chuseok actually
            fall.
          </p>
        </Section>

        {/* What we cover */}
        <Section label="Supported countries">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              marginBottom: 16,
            }}
          >
            {SUPPORTED_COUNTRIES.map((c) => (
              <div
                key={c.code}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "16px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                  }}
                >
                  {c.code}
                </p>
                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 400,
                    marginBottom: 8,
                  }}
                >
                  {c.name}
                </p>
                <Link
                  href={`/calendar/${c.code.toLowerCase()}/${currentYear}/1`}
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 1,
                  }}
                >
                  View {currentYear} calendar ??                </Link>
              </div>
            ))}
          </div>
          <p style={{ ...prose, marginTop: 16 }}>
            More countries are on the roadmap. Australia, Canada, the UK, and
            Germany are next. If there is a country you need urgently, let us
            know via the{" "}
            <Link href="/contact" style={inlineLink}>
              contact page
            </Link>
            .
          </p>
        </Section>

        {/* How PDF works */}
        <Section label="How the PDF works">
          <p style={prose}>
            When you click the download button, the server renders the calendar
            page using a headless Chromium browser (via{" "}
            <code
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                background: "var(--border)",
                padding: "1px 5px",
                borderRadius: 3,
              }}
            >
              puppeteer-core
            </code>{" "}
            and{" "}
            <code
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                background: "var(--border)",
                padding: "1px 5px",
                borderRadius: 3,
              }}
            >
              @sparticuz/chromium
            </code>
            ) and exports it as a PDF. The output is A4 landscape by default,
            formatted to use the full page width with clean print margins.
          </p>
          <p style={prose}>
            Public holiday data comes from{" "}
            <code
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                background: "var(--border)",
                padding: "1px 5px",
                borderRadius: 3,
              }}
            >
              date-holidays
            </code>
            , an open-source library with actively maintained holiday datasets
            for over 100 countries. We filter to official public holidays only
            ??no observances, no regional-only days, unless they are genuinely
            national.
          </p>
          <p style={prose}>
            The calendar design is optimised for both colour and black-and-white
            printing. No background fills, no decorative elements that eat ink.
            Holidays appear in a distinct colour on screen but degrade
            gracefully to a label in B&W.
          </p>
        </Section>

        {/* Content library */}
        <Section label="World events and holiday guides">
          <p style={prose}>
            Beyond the calendar grid, we maintain two content libraries:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 16px", display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              ["/events", "World Events", "100+ international observances ??from Earth Day to World Mental Health Day. Each entry has a history, cultural context for our three supported countries, and a list of activities."],
              ["/holidays", "Cultural Holidays", "In-depth guides to major cultural holidays like Chuseok, Golden Week, and Thanksgiving ??origin, history, traditional food, and travel tips."],
            ].map(([href, title, desc]) => (
              <li key={href as string} style={{ display: "flex", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--muted)",
                    paddingTop: 3,
                    flexShrink: 0,
                  }}
                >
                  ??                </span>
                <span>
                  <Link href={href as string} style={{ ...inlineLink, fontWeight: 500 }}>
                    {title as string}
                  </Link>
                  <span style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                    {" "}??{desc as string}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p style={prose}>
            These are written to be actually useful ??not a recitation of Wikipedia
            facts or search-engine filler. If something reads like a press release,
            it does not belong here.
          </p>
        </Section>

        {/* What's next */}
        <Section label="What we are working on">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "More countries ??Australia, Canada, UK, Germany",
              "Weekly and bi-weekly calendar layouts",
              "Printable yearly overview (all 12 months on one page)",
              "More cultural holiday guides (Diwali, Lunar New Year for additional countries)",
              "Dark-mode PDF option",
              "A4 portrait layout option",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "var(--muted)",
                    paddingTop: 4,
                    flexShrink: 0,
                  }}
                >
                  ??                </span>
                <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact CTA */}
        <div
          style={{
            marginTop: 48,
            padding: "24px 24px",
            border: "1px solid var(--border)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>
              Found a mistake, or have a suggestion?
            </p>
            <p style={{ fontSize: 13, color: "var(--muted)" }}>
              Wrong holiday date, missing country, or a feature you need ??we read everything.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              padding: "10px 20px",
              background: "var(--fg)",
              color: "var(--bg)",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Get in touch ??          </Link>
        </div>
      </div>
    </>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 56 }}>
      <h2
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        {label}
      </h2>
      {children}
    </section>
  );
}

const prose: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.85,
  color: "var(--fg)",
  marginBottom: 16,
};

const inlineLink: React.CSSProperties = {
  color: "var(--fg)",
  textDecoration: "underline",
  textUnderlineOffset: 3,
};

