import { ImageResponse } from "next/og";
import { getHolidayContentBySlug } from "@/lib/holidays-content";

export const runtime = "edge";
export const alt = "Cultural Holiday";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COUNTRY_FLAG: Record<string, string> = { US: "🇺🇸", KR: "🇰🇷", JP: "🇯🇵" };

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const holiday = getHolidayContentBySlug(slug);

  const name = holiday?.name ?? "Cultural Holiday";
  const localName = holiday?.localName ?? "";
  const dateLabel = holiday?.dateLabel ?? "";
  const countryName = holiday?.countryName ?? "";
  const flag = holiday ? COUNTRY_FLAG[holiday.country] ?? "" : "";
  const tagline = holiday?.tagline ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0f0f0f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "serif",
          color: "#f5f5f5",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "serif",
              fontSize: 20,
              opacity: 0.45,
              letterSpacing: "0.02em",
            }}
          >
            printcal
          </span>
          {countryName && (
            <span
              style={{
                fontSize: 13,
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 20,
                padding: "4px 16px",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              {flag} {countryName}
            </span>
          )}
        </div>

        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {dateLabel && (
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 15,
                color: "#a78bfa",
                letterSpacing: "0.08em",
              }}
            >
              {dateLabel}
            </span>
          )}
          {localName && (
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 18,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.06em",
              }}
            >
              {localName}
            </span>
          )}
          <h1
            style={{
              fontFamily: "serif",
              fontSize: name.length > 20 ? 64 : 80,
              fontWeight: 400,
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.02em",
              color: "#f5f5f5",
            }}
          >
            {name}
          </h1>
          {tagline && (
            <p
              style={{
                fontFamily: "serif",
                fontSize: 20,
                color: "rgba(245,245,245,0.5)",
                lineHeight: 1.5,
                margin: 0,
                fontStyle: "italic",
                maxWidth: 740,
              }}
            >
              {tagline}
            </p>
          )}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 14,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "monospace",
            letterSpacing: "0.04em",
          }}
        >
          <span>History · traditions · free printable calendars — printablecalendars.app</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
