"use client";
import { useRouter } from "next/navigation";

const LANG_TO_COUNTRY: Record<string, string> = {
  en: "us",
  ko: "kr",
  ja: "jp",
};

export default function CalendarNavLink({
  currentLocale,
  label,
  years,
}: {
  currentLocale: string;
  label: string;
  /**
   * CALENDAR_YEARS, from the server. The month below still comes from the
   * visitor's clock so this stays correct on prerendered pages, but a device
   * whose clock is a year off would otherwise navigate to a year we don't
   * serve — which 404s.
   */
  years: number[];
}) {
  const router = useRouter();

  function handleClick() {
    const country = LANG_TO_COUNTRY[currentLocale] ?? "us";
    const now = new Date();
    const clockYear = now.getFullYear();
    const year = years.includes(clockYear) ? clockYear : years[0];
    const month = now.getMonth() + 1;
    router.push(`/calendar/${country}/${year}/${month}`);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        fontSize: 13,
        color: "var(--muted)",
        textDecoration: "none",
        padding: "4px 10px",
        borderRadius: 6,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        transition: "color 0.15s, background 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--fg)";
        e.currentTarget.style.background = "var(--header-bg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--muted)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      {label}
    </button>
  );
}
