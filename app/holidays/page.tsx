import Link from "next/link";
import type { Metadata } from "next";
import {
  CULTURAL_HOLIDAYS,
  COUNTRY_ORDER,
  COUNTRY_FULL_NAMES,
} from "@/lib/holidays-content";

export const dynamic = "force-static";
const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Cultural Holidays ??History, Traditions & Printable Calendars",
  description:
    "Explore the history, food, and traditions of major cultural holidays in Japan, South Korea, and the United States ??from Chuseok to Thanksgiving. Download free printable calendars.",
  alternates: {
    canonical: `${BASE_URL}/holidays`,
    languages: { en: `${BASE_URL}/holidays`, "x-default": `${BASE_URL}/holidays` },
  },
  openGraph: {
    title: "Cultural Holidays | PrintableCalendars",
    description:
      "Origin stories, traditions, food, and free printable calendars for major holidays across Japan, South Korea, and the USA.",
    url: `${BASE_URL}/holidays`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultural Holidays | PrintableCalendars",
    description:
      "History and traditions of major holidays in Japan, South Korea, and the USA ??with free printable calendars.",
  },
  robots: { index: true, follow: true },
};

const FLAG: Record<string, string> = { US: "?눣?눡", KR: "?눖?눟", JP: "?눓?눝" };

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cultural Holidays ??History & Traditions",
  url: `${BASE_URL}/holidays`,
  numberOfItems: CULTURAL_HOLIDAYS.length,
  itemListElement: CULTURAL_HOLIDAYS.map((h, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/holidays/${h.slug}`,
    name: h.name,
  })),
};

export default function HolidaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        {/* Header */}
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
            Cultural Holidays
          </p>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
              maxWidth: 600,
            }}
          >
            Holidays, traditions &amp; the stories behind them
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.65,
              maxWidth: 560,
            }}
          >
            From Chuseok to Golden Week to Thanksgiving ??explore the origin,
            history, food, and culture of the world&apos;s most celebrated
            holidays. Each entry links to a free printable calendar for the
            relevant month.
          </p>
        </div>

        {/* Country sections */}
        {COUNTRY_ORDER.map((countryCode) => {
          const holidays = CULTURAL_HOLIDAYS.filter((h) => h.country === countryCode);
          if (holidays.length === 0) return null;
          return (
            <section key={countryCode} style={{ marginBottom: 64 }}>
              {/* Country heading */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                  paddingBottom: 16,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: 20 }}>{FLAG[countryCode]}</span>
                <h2
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: 26,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {COUNTRY_FULL_NAMES[countryCode]}
                </h2>
              </div>

              {/* Holiday cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 20,
                }}
              >
                {holidays.map((holiday) => (
                  <Link
                    key={holiday.slug}
                    href={`/holidays/${holiday.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        padding: 24,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        transition: "border-color 0.2s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 8,
                        }}
                      >
                        <div>
                          {holiday.localName && (
                            <p
                              style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: 11,
                                color: "var(--muted)",
                                letterSpacing: "0.04em",
                                marginBottom: 4,
                              }}
                            >
                              {holiday.localName}
                            </p>
                          )}
                          <h3
                            style={{
                              fontFamily: "'EB Garamond', Georgia, serif",
                              fontSize: 22,
                              fontWeight: 400,
                              lineHeight: 1.2,
                            }}
                          >
                            {holiday.name}
                          </h3>
                        </div>
                        {holiday.isLunar && (
                          <span
                            style={{
                              fontSize: 10,
                              color: "var(--muted)",
                              border: "1px solid var(--border)",
                              borderRadius: 4,
                              padding: "2px 7px",
                              whiteSpace: "nowrap",
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          >
                            Lunar
                          </span>
                        )}
                      </div>

                      <p
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: "var(--holiday)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {holiday.dateLabel}
                      </p>

                      <p
                        style={{
                          fontSize: 13,
                          color: "var(--muted)",
                          lineHeight: 1.6,
                          flex: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {holiday.tagline}
                      </p>

                      <p
                        style={{
                          fontSize: 11,
                          color: "var(--muted)",
                          fontFamily: "'DM Mono', monospace",
                          letterSpacing: "0.04em",
                          marginTop: 4,
                        }}
                      >
                        {holiday.food.length} traditional dishes 쨌{" "}
                        {holiday.activities.length} activities
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

