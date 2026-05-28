import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getHolidays, buildCalendarDays, getCountryConfig } from "@/lib/holidays";
import { MONTH_NAMES, SUPPORTED_COUNTRIES } from "@/lib/types";
import { getEventsByMonth, formatEventDate, CATEGORY_LABELS } from "@/lib/events";
import CalendarGrid from "@/components/CalendarGrid";
import MonthNav from "@/components/MonthNav";
import DownloadButton from "@/components/DownloadButton";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { buildHowToSchema } from "@/lib/seo-helpers";

interface PageProps {
  params: Promise<{ country: string; year: string; month: string }>;
}

export async function generateStaticParams() {
  const params = [];
  const year = new Date().getFullYear();
  for (const country of SUPPORTED_COUNTRIES) {
    for (let month = 1; month <= 12; month++) {
      params.push({
        country: country.code.toLowerCase(),
        year: String(year),
        month: String(month),
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, year, month } = await params;
  const config = getCountryConfig(country);
  if (!config) return {};
  const monthName = MONTH_NAMES[Number(month) - 1];
  const title = `${monthName} ${year} Printable Calendar — ${config.name} Public Holidays | PrintableCalendars`;
  const description = `Free printable ${monthName} ${year} calendar for ${config.name} with official public holidays. Download as A4 PDF instantly, no login required.`;
  return {
    title,
    description,
    keywords: [
      `${config.name} calendar ${monthName} ${year}`,
      `printable calendar ${monthName} ${year}`,
      `${monthName} ${year} calendar PDF`,
      `${config.name} public holidays ${year}`,
      `free printable monthly calendar`,
      `${monthName} ${year} holiday calendar`,
    ],
    openGraph: { title, description, type: "website", siteName: "PrintableCalendars" },
    twitter: { card: "summary_large_image", title, description },
    alternates: {
      canonical: `https://printablecalendars.app/calendar/${country}/${year}/${month}`,
    },
  };
}

export default async function CalendarPage({ params }: PageProps) {
  const { country, year: yearStr, month: monthStr } = await params;
  const year = Number(yearStr);
  const month = Number(monthStr);

  const config = getCountryConfig(country);
  if (!config || isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    notFound();
  }

  const holidays = getHolidays(config.code, year);
  const days = buildCalendarDays(year, month, holidays);
  const monthHolidays = days.filter((d) => d.holiday && d.isCurrentMonth);
  const monthName = MONTH_NAMES[month - 1];
  const monthEvents = getEventsByMonth(month).slice(0, 8);

  // Structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Free ${monthName} ${year} Printable Calendar — ${config.name} PDF`,
    description: `Free printable ${monthName} ${year} calendar for ${config.name} with public holidays. A4 landscape PDF.`,
    url: `https://printablecalendars.app/calendar/${country}/${year}/${month}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://printablecalendars.app" },
        { "@type": "ListItem", position: 2, name: config.name, item: `https://printablecalendars.app/calendar/${country}/${year}` },
        { "@type": "ListItem", position: 3, name: `${monthName} ${year}`, item: `https://printablecalendars.app/calendar/${country}/${year}/${month}` },
      ],
    },
  };

  const howToSchema = buildHowToSchema({
    name: `How to download a free printable calendar for ${config.name} — ${monthName} ${year}`,
    description: `Download a free A4 PDF calendar with ${config.name} public holidays in 3 steps. No login required.`,
    steps: [
      {
        name: "Choose your country",
        text: `Select ${config.name} from the country switcher at the top of the page.`,
      },
      {
        name: "Navigate to the month",
        text: `Use the month navigation arrows to go to ${monthName} ${year}.`,
      },
      {
        name: "Download as PDF",
        text: `Click the "Download PDF" button. The calendar downloads instantly as an A4 landscape PDF with all ${config.name} public holidays included. No account required.`,
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        {/* Top ad — below header */}
        <AdSlot slot="top-banner" style={{ marginBottom: 24 }} />

        {/* Toolbar */}
        <div
          className="no-print"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {/* Country switcher */}
          <div style={{ display: "flex", gap: 6 }}>
            {SUPPORTED_COUNTRIES.map((c) => (
              <Link
                key={c.code}
                href={`/calendar/${c.code.toLowerCase()}/${year}/${month}`}
                style={{
                  fontSize: 12,
                  padding: "5px 12px",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  textDecoration: "none",
                  color:
                    c.code.toLowerCase() === country
                      ? "var(--bg)"
                      : "var(--muted)",
                  background:
                    c.code.toLowerCase() === country
                      ? "var(--fg)"
                      : "transparent",
                  transition: "all 0.15s",
                  fontWeight: 500,
                }}
              >
                {c.name}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link
              href={`/calendar/${country}/${year}`}
              style={{
                fontSize: 12, padding: "5px 12px",
                border: "1px solid var(--border)", borderRadius: 8,
                textDecoration: "none", color: "var(--muted)",
              }}
            >
              Year view
            </Link>
            <MonthNav country={country} year={year} month={month} />
          </div>
        </div>

        {/* Calendar */}
        <div className="fade-up">
          <CalendarGrid
            days={days}
            year={year}
            month={month}
            countryName={config.name}
          />
        </div>

        {/* Holiday list (SEO content) */}
        {monthHolidays.length > 0 && (
          <section
            className="no-print"
            style={{
              marginTop: 40,
              padding: 24,
              border: "1px solid var(--border)",
              borderRadius: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 20,
                fontWeight: 400,
                marginBottom: 16,
                color: "var(--fg)",
              }}
            >
              Public Holidays in {config.name} — {monthName} {year}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {monthHolidays.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: "var(--holiday)",
                      minWidth: 80,
                    }}
                  >
                    {monthName.slice(0, 3)} {String(d.date.getDate()).padStart(2, "0")}
                  </span>
                  <span style={{ color: "var(--fg)" }}>{d.holiday!.name}</span>
                  <span style={{ color: "var(--muted)", fontSize: 12 }}>
                    {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.date.getDay()]}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AdSense — Today's Events 섹션 하단 */}
        <AdSlot slot="todays-events" style={{ marginTop: 24 }} />

        {/* World events this month */}
        {monthEvents.length > 0 && (
          <section
            className="no-print"
            style={{
              marginTop: 32,
              padding: 24,
              border: "1px solid var(--border)",
              borderRadius: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 20,
                fontWeight: 400,
                marginBottom: 16,
                color: "var(--fg)",
              }}
            >
              World Events in {monthName}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 10,
              }}
            >
              {monthEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "10px 14px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <span style={{ fontSize: 13, lineHeight: 1.4 }}>{event.name}</span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--holiday)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {formatEventDate(event)}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href={`/events`}
              style={{
                display: "inline-block",
                marginTop: 14,
                fontSize: 12,
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: 1,
              }}
            >
              Browse all world events →
            </Link>
          </section>
        )}

        {/* Pre-download ad */}
        <AdSlot slot="pre-download" style={{ margin: "32px 0" }} />

        {/* Download section */}
        <div
          className="no-print"
          style={{
            textAlign: "center",
            padding: "32px 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "var(--muted)",
              marginBottom: 16,
            }}
          >
            Landscape PDF · includes public holidays · print-ready
          </p>
          <DownloadButton country={country} year={year} month={month} />
        </div>

        {/* SEO text */}
        <section
          className="no-print"
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 22,
              fontWeight: 400,
              marginBottom: 12,
            }}
          >
            About this printable calendar
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, maxWidth: 700 }}>
            This free printable {monthName} {year} calendar for {config.name} includes
            all official public holidays. Download as a PDF (A3–A6) in landscape format.
            The clean, minimal design is optimized for both black-and-white and color printing.
          </p>
        </section>
      </div>
    </>
  );
}
