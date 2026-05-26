"use client";

import Link from "next/link";
import { useMemo } from "react";
import { getTodaysEvents, getUpcomingEvents, formatEventDate, CATEGORY_LABELS } from "@/lib/events";

export default function TodaysEvents() {
  const today = useMemo(() => new Date(), []);
  const todaysEvents = useMemo(() => getTodaysEvents(today), [today]);
  const upcoming = useMemo(() => getUpcomingEvents(today, 4), [today]);

  const showToday = todaysEvents.length > 0;

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {showToday ? "Today's Events" : "Coming Up"}
      </p>

      {showToday && (
        <div style={{ marginBottom: 24 }}>
          {todaysEvents.map((e) => (
            <div
              key={e.slug}
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                borderRadius: 10,
                padding: "16px 18px",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.3 }}>{e.name}</p>
                <span
                  style={{
                    fontSize: 10,
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 4,
                    padding: "2px 7px",
                    opacity: 0.6,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {CATEGORY_LABELS[e.category]}
                </span>
              </div>
              <p style={{ fontSize: 12, opacity: 0.65, lineHeight: 1.55, marginBottom: 12 }}>
                {e.tagline}
              </p>
              <Link
                href={`/events/${e.slug}`}
                style={{
                  fontSize: 12,
                  opacity: 0.8,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: 1,
                  color: "inherit",
                }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {upcoming.map((e) => (
          <Link
            key={e.slug}
            href={`/events/${e.slug}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              textDecoration: "none",
              color: "inherit",
              gap: 12,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <span style={{ fontSize: 13, display: "block", lineHeight: 1.4 }}>{e.name}</span>
              <span
                style={{
                  fontSize: 10,
                  color: "var(--muted)",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {CATEGORY_LABELS[e.category]}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--holiday)",
                whiteSpace: "nowrap",
                paddingTop: 2,
                flexShrink: 0,
              }}
            >
              {formatEventDate(e)}
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/events"
        style={{
          display: "inline-block",
          marginTop: 20,
          fontSize: 12,
          color: "var(--muted)",
          textDecoration: "none",
          borderBottom: "1px solid var(--border)",
          paddingBottom: 1,
        }}
      >
        All world events →
      </Link>
    </div>
  );
}
