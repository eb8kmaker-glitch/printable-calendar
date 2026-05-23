import Link from "next/link";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import { getHolidays } from "@/lib/holidays";
import { getFeaturedEvents, formatEventDate, CATEGORY_LABELS } from "@/lib/events";
import TodaysEvents from "@/components/TodaysEvents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Printable Calendars — Download PDF with Public Holidays",
  description:
    "Download free printable monthly calendars for USA, Japan and South Korea. Includes public holidays. A4 PDF, minimal design, instant download.",
};

export default function HomePage() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const featuredEvents = getFeaturedEvents().slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PrintableCalendars",
    url: "https://printablecalendars.io",
    description: "Free printable monthly calendars with public holidays",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://printablecalendars.io/calendar/{country}/{year}/{month}",
      "query-input": "required name=country",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 80, maxWidth: 600 }}>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Printable calendars,
            <br />
            <span style={{ opacity: 0.4 }}>free forever.</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginBottom: 28 }}>
            Download monthly calendars with public holidays for USA, Japan, and
            South Korea. Clean A4 PDFs, no login required.
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

        {/* Country cards + Today's Events sidebar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr minmax(240px, 300px)",
            gap: 24,
            marginBottom: 80,
            alignItems: "start",
          }}
        >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {SUPPORTED_COUNTRIES.map((c) => {
            const upcomingHolidays = getHolidays(c.code, year)
              .filter((h) => new Date(h.date) >= now)
              .slice(0, 3);

            return (
              <div
                key={c.code}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: 24,
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "var(--muted)",
                        letterSpacing: "0.05em",
                        marginBottom: 4,
                      }}
                    >
                      {c.code}
                    </p>
                    <h2
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: 22,
                        fontWeight: 400,
                      }}
                    >
                      {c.name}
                    </h2>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Link
                      href={`/calendar/${c.code.toLowerCase()}/${year}`}
                      style={{
                        fontSize: 12, padding: "5px 12px",
                        border: "1px solid var(--border)", borderRadius: 6,
                        textDecoration: "none", color: "var(--muted)",
                      }}
                    >
                      {year}
                    </Link>
                    <Link
                      href={`/calendar/${c.code.toLowerCase()}/${year}/${month}`}
                      style={{
                        fontSize: 12, padding: "5px 12px",
                        border: "1px solid var(--border)", borderRadius: 6,
                        textDecoration: "none", color: "var(--fg)",
                      }}
                    >
                      This month →
                    </Link>
                  </div>
                </div>

                {upcomingHolidays.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <p
                      style={{
                        fontSize: 11,
                        color: "var(--muted)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Upcoming holidays
                    </p>
                    {upcomingHolidays.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 12,
                          fontSize: 13,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            color: "var(--holiday)",
                            minWidth: 70,
                          }}
                        >
                          {h.date.slice(5)}
                        </span>
                        <span style={{ color: "var(--muted)" }}>{h.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Month grid links */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 4,
                  }}
                >
                  {MONTH_NAMES.map((name, i) => (
                    <Link
                      key={i}
                      href={`/calendar/${c.code.toLowerCase()}/${year}/${i + 1}`}
                      style={{
                        fontSize: 11,
                        padding: "4px 0",
                        textAlign: "center",
                        border: "1px solid var(--border)",
                        borderRadius: 4,
                        textDecoration: "none",
                        color:
                          i + 1 === month
                            ? "var(--bg)"
                            : "var(--muted)",
                        background:
                          i + 1 === month ? "var(--fg)" : "transparent",
                      }}
                    >
                      {name.slice(0, 3)}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {/* Today's events sidebar */}
        <TodaysEvents />
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div style={{ marginBottom: 80 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 24,
              }}
            >
              <h2
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 24,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Notable world events
              </h2>
              <Link
                href="/events"
                style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none" }}
              >
                View all →
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 14,
              }}
            >
              {featuredEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "16px 18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "var(--holiday)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {formatEventDate(event)}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                          borderRadius: 3,
                          padding: "1px 6px",
                        }}
                      >
                        {CATEGORY_LABELS[event.category]}
                      </span>
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3 }}>
                      {event.name}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        lineHeight: 1.55,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {event.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {[
            ["PDF Download", "A4 landscape, print-ready, instantly generated"],
            ["Public Holidays", "Official holidays for each country included"],
            ["Minimal Design", "Clean layout that works in B&W or color print"],
            ["No Sign-up", "Completely free, no account required"],
          ].map(([title, desc]) => (
            <div key={title}>
              <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
