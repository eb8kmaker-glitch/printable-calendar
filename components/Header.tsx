"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { SUPPORTED_COUNTRIES } from "@/lib/types";

interface NavLabels {
  holidays: string;
  events: string;
  dateCalc: string;
}

interface HeaderProps {
  navLabels?: NavLabels;
  langSwitcher?: React.ReactNode;
}

const DEFAULT_NAV: NavLabels = {
  holidays: "Holidays",
  events: "Events",
  dateCalc: "Date Calc",
};

export default function Header({ navLabels = DEFAULT_NAV, langSwitcher }: HeaderProps) {
  const { theme, toggle } = useTheme();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const linkStyle: React.CSSProperties = {
    fontSize: 13,
    color: "var(--muted)",
    textDecoration: "none",
    padding: "4px 10px",
    borderRadius: 6,
    transition: "color 0.15s, background 0.15s",
  };

  const hoverHandlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      (e.target as HTMLElement).style.color = "var(--fg)";
      (e.target as HTMLElement).style.background = "var(--header-bg)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      (e.target as HTMLElement).style.color = "var(--muted)";
      (e.target as HTMLElement).style.background = "transparent";
    },
  };

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
          PrintableCalendars
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {SUPPORTED_COUNTRIES.map((c) => (
            <Link
              key={c.code}
              href={`/calendar/${c.code.toLowerCase()}/${currentYear}/${currentMonth}`}
              style={linkStyle}
              {...hoverHandlers}
            >
              {c.code}
            </Link>
          ))}

          <Link href="/holidays" style={linkStyle} {...hoverHandlers}>
            {navLabels.holidays}
          </Link>
          <Link href="/events" style={linkStyle} {...hoverHandlers}>
            {navLabels.events}
          </Link>
          <Link href="/date-calculator" style={linkStyle} {...hoverHandlers}>
            {navLabels.dateCalc}
          </Link>

          {/* Lang switcher slot */}
          {langSwitcher && (
            <div style={{ display: "flex", alignItems: "center", marginLeft: 4 }}>
              {langSwitcher}
            </div>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              marginLeft: 4,
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
