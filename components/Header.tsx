"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { SUPPORTED_COUNTRIES } from "@/lib/types";

export default function Header() {
  const { theme, toggle } = useTheme();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  return (
    <header
      className="no-print"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 20,
            fontWeight: 500,
            color: "var(--fg)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          printcal
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {SUPPORTED_COUNTRIES.map((c) => (
            <Link
              key={c.code}
              href={`/calendar/${c.code.toLowerCase()}/${currentYear}/${currentMonth}`}
              style={{
                fontSize: 13,
                color: "var(--muted)",
                textDecoration: "none",
                padding: "4px 10px",
                borderRadius: 6,
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--fg)";
                (e.target as HTMLElement).style.background = "var(--header-bg)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--muted)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {c.code}
            </Link>
          ))}

          <Link
            href="/holidays"
            style={{
              fontSize: 13,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "4px 10px",
              borderRadius: 6,
              transition: "color 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "var(--fg)";
              (e.target as HTMLElement).style.background = "var(--header-bg)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "var(--muted)";
              (e.target as HTMLElement).style.background = "transparent";
            }}
          >
            Holidays
          </Link>
          <Link
            href="/events"
            style={{
              fontSize: 13,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "4px 10px",
              borderRadius: 6,
              transition: "color 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "var(--fg)";
              (e.target as HTMLElement).style.background = "var(--header-bg)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "var(--muted)";
              (e.target as HTMLElement).style.background = "transparent";
            }}
          >
            Events
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              marginLeft: 8,
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              borderRadius: 8,
              background: "transparent",
              color: "var(--fg)",
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            {theme === "light" ? "○" : "●"}
          </button>
        </nav>
      </div>
    </header>
  );
}
