import { ImageResponse } from "next/og";
import { getEventBySlug, formatEventDate, CATEGORY_LABELS } from "@/lib/events";

export const runtime = "edge";
export const alt = "World Event";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  const name = event?.name ?? "World Event";
  const tagline = event?.tagline ?? "";
  const dateLabel = event ? formatEventDate(event) : "";
  const category = event ? CATEGORY_LABELS[event.category] : "";

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
        {/* Top row: site name + category */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "serif", fontSize: 20, opacity: 0.45, letterSpacing: "0.02em" }}>
            printcal
          </span>
          {category && (
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
              {category}
            </span>
          )}
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {dateLabel && (
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 16,
                color: "#a78bfa",
                letterSpacing: "0.08em",
              }}
            >
              {dateLabel}
            </span>
          )}
          <h1
            style={{
              fontFamily: "serif",
              fontSize: name.length > 30 ? 60 : 76,
              fontWeight: 400,
              lineHeight: 1.1,
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
                fontSize: 22,
                color: "rgba(245,245,245,0.55)",
                lineHeight: 1.5,
                margin: 0,
                fontStyle: "italic",
                maxWidth: 760,
              }}
            >
              {tagline}
            </p>
          )}
        </div>

        {/* Bottom: printable calendar CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 14,
            color: "rgba(255,255,255,0.35)",
            fontFamily: "monospace",
            letterSpacing: "0.04em",
          }}
        >
          <span>Free printable calendars — printablecalendars.app</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
