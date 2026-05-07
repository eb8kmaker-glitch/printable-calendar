"use client";

import Link from "next/link";
import { useMemo } from "react";
import { getTodaysEvents, getUpcomingEvents, formatEventDate } from "@/lib/events";

export default function TodaysEvents() {
  const today = useMemo(() => new Date(), []);
  const todaysEvents = useMemo(() => getTodaysEvents(today), [today]);
  const upcoming = useMemo(() => getUpcomingEvents(today, 3), [today]);

  // Show today's events section only if there are any; always show upcoming
  const showToday = todaysEvents.length > 0;

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 24,
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
        {showToday ? "Today" : "Coming up"}
      </p>

      {showToday && (
        <div style={{ marginBottom: 20 }}>
          {todaysEvents.map((e) => (
            <Link
              key={e.slug}
              href={`/events/${e.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "var(--fg)",
                  color: "var(--bg)",
                  borderRadius: 8,
                  padding: "12px 16px",
                  marginBottom: 8,
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 500 }}>{e.name}</p>
                <p style={{ fontSize: 12, opacity: 0.6, marginTop: 2 }}>{e.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {upcoming.map((e) => (
          <Link
            key={e.slug}
            href={`/events/${e.slug}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 13 }}>{e.name}</span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--holiday)",
                whiteSpace: "nowrap",
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
          marginTop: 16,
          fontSize: 12,
          color: "var(--muted)",
          textDecoration: "none",
          borderBottom: "1px solid var(--border)",
          paddingBottom: 1,
        }}
      >
        All events →
      </Link>
    </div>
  );
}
