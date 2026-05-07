import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getHolidays } from "@/lib/holidays";
import { SUPPORTED_COUNTRIES } from "@/lib/types";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// slug format: {countryCode}-{holiday-name-kebab}-{year}
function parseSlug(slug: string) {
  const parts = slug.split("-");
  const countryCode = parts[0].toUpperCase();
  const year = Number(parts[parts.length - 1]);
  const name = parts.slice(1, -1).join(" ");
  return { countryCode, year, name };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { countryCode, year, name } = parseSlug(slug);
  const country = SUPPORTED_COUNTRIES.find((c) => c.code === countryCode);
  if (!country) return {};
  const title = `${name} ${year} — ${country.name} Public Holiday`;
  return {
    title,
    description: `Learn about ${name}, a public holiday in ${country.name}. View related printable calendars.`,
    alternates: { canonical: `/holiday/${slug}` },
  };
}

export default async function HolidayPage({ params }: PageProps) {
  const { slug } = await params;
  const { countryCode, year, name } = parseSlug(slug);
  const country = SUPPORTED_COUNTRIES.find((c) => c.code === countryCode);
  if (!country || isNaN(year)) notFound();

  const holidays = getHolidays(countryCode, year);
  const holiday = holidays.find(
    (h) => h.name.toLowerCase().includes(name.toLowerCase())
  );
  if (!holiday) notFound();

  const holidayDate = new Date(holiday.date);
  const month = holidayDate.getMonth() + 1;

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px" }}>
      <Link
        href={`/calendar/${countryCode.toLowerCase()}/${year}/${month}`}
        style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}
      >
        ← Back to {new Date(holiday.date).toLocaleString("en", { month: "long" })} {year} Calendar
      </Link>

      <h1
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: 40,
          fontWeight: 400,
          letterSpacing: "-0.03em",
          margin: "24px 0 8px",
        }}
      >
        {holiday.name}
      </h1>

      <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 14,
            color: "var(--holiday)",
          }}
        >
          {holiday.date}
        </span>
        <span
          style={{
            fontSize: 12,
            padding: "3px 10px",
            border: "1px solid var(--border)",
            borderRadius: 20,
            color: "var(--muted)",
          }}
        >
          {country.name}
        </span>
        <span
          style={{
            fontSize: 12,
            padding: "3px 10px",
            border: "1px solid var(--border)",
            borderRadius: 20,
            color: "var(--muted)",
          }}
        >
          Public Holiday
        </span>
      </div>

      <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>
        {holiday.name} is an official public holiday in {country.name}
        {year ? ` in ${year}` : ""}. On this day, most government offices,
        banks, and many businesses are closed.
      </p>

      <Link
        href={`/calendar/${countryCode.toLowerCase()}/${year}/${month}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 20px",
          background: "var(--fg)",
          color: "var(--bg)",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        View Printable Calendar →
      </Link>
    </div>
  );
}
