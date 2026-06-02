"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

interface NavLabels {
  holidays: string;
  events: string;
  dateCalc: string;
  calendar: string;
  planners: string;
}

interface PlannerLink {
  href: string;
  label: string;
}

interface HeaderProps {
  navLabels?: NavLabels;
  langSwitcher?: React.ReactNode;
  calendarNavLink?: React.ReactNode;
  plannerLinks?: PlannerLink[];
}

const DEFAULT_NAV: NavLabels = {
  holidays: "Holidays",
  events: "Events",
  dateCalc: "Date Calc",
  calendar: "Calendar",
  planners: "Planners",
};

export default function Header({ navLabels = DEFAULT_NAV, langSwitcher, calendarNavLink, plannerLinks = [] }: HeaderProps) {
  const { theme, toggle } = useTheme();
  const [plannersOpen, setPlannersOpen] = useState(false);

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
          {/* Calendar — locale-aware */}
          {calendarNavLink}

          <Link href="/holidays" style={linkStyle} {...hoverHandlers}>
            {navLabels.holidays}
          </Link>
          <Link href="/events" style={linkStyle} {...hoverHandlers}>
            {navLabels.events}
          </Link>
          <Link href="/date-calculator" style={linkStyle} {...hoverHandlers}>
            {navLabels.dateCalc}
          </Link>

          {/* Planners dropdown */}
          {plannerLinks.length > 0 && (
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setPlannersOpen(true)}
              onMouseLeave={() => setPlannersOpen(false)}
            >
              <button
                style={{
                  ...linkStyle,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                  (e.currentTarget as HTMLElement).style.background = "var(--header-bg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {navLabels.planners}
                <span style={{ fontSize: 9, opacity: 0.6 }}>▾</span>
              </button>
              {plannersOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "6px 0",
                    minWidth: 180,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    zIndex: 100,
                  }}
                >
                  {plannerLinks.map((pl) => (
                    <Link
                      key={pl.href}
                      href={pl.href}
                      style={{
                        display: "block",
                        padding: "7px 16px",
                        fontSize: 13,
                        color: "var(--muted)",
                        textDecoration: "none",
                        transition: "background 0.1s, color 0.1s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--header-bg)";
                        e.currentTarget.style.color = "var(--fg)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--muted)";
                      }}
                    >
                      {pl.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

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
