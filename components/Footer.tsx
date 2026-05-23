import Link from "next/link";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="no-print"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px 32px",
        marginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 40 }}>
          <div>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, marginBottom: 12 }}>printcal</p>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
              Free printable monthly calendars with public holidays. Download as A4 PDF.
            </p>
          </div>

          {SUPPORTED_COUNTRIES.map((c) => (
            <div key={c.code}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
                {c.name}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].slice(0, 6).map((m) => (
                  <Link
                    key={m}
                    href={`/calendar/${c.code.toLowerCase()}/${year}/${m}`}
                    style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}
                  >
                    {MONTH_NAMES[m - 1]} {year}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--muted)" }}>
          <span>© {year} PrintableCalendars. Free to use.</span>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/sitemap.xml" style={{ color: "var(--muted)", textDecoration: "none" }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
