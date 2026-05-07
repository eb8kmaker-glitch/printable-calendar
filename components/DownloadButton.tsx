"use client";

import { useState, useEffect } from "react";

type PaperSize = "A3" | "A4" | "A5" | "A6";
type Orientation = "landscape" | "portrait";

interface DownloadButtonProps {
  country: string;
  year: number;
  month?: number; // absent = yearly PDF
}

const selectStyle: React.CSSProperties = {
  height: 40,
  padding: "0 12px",
  border: "1px solid var(--border)",
  borderRadius: 8,
  background: "var(--bg)",
  color: "var(--fg)",
  cursor: "pointer",
  fontSize: 13,
};

export default function DownloadButton({ country, year, month }: DownloadButtonProps) {
  const isYearly = !month;
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<PaperSize>("A4");
  const [orientation, setOrientation] = useState<Orientation>("landscape");
  const [error, setError] = useState<string | null>(null);

  // A6 is not available for yearly — reset if needed
  useEffect(() => {
    if (isYearly && size === "A6") setSize("A4");
  }, [isYearly, size]);

  const handleSizeChange = (next: PaperSize) => {
    if (isYearly && next === "A6") return;
    setSize(next);
  };

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        country,
        year: String(year),
        size,
        orientation,
      });
      if (month) params.set("month", String(month));

      const res = await fetch(`/api/pdf?${params}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "PDF generation failed");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const monthPart = month ? `-${String(month).padStart(2, "0")}` : "";
      a.download = `calendar-${country}-${year}${monthPart}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Download failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="no-print" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>

        {/* Paper size */}
        <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
          {(["A3", "A4", "A5", "A6"] as PaperSize[]).map((s) => {
            const disabled = isYearly && s === "A6";
            const active = size === s;
            return (
              <button
                key={s}
                onClick={() => handleSizeChange(s)}
                disabled={disabled}
                style={{
                  height: 40,
                  padding: "0 14px",
                  border: "none",
                  borderRight: "1px solid var(--border)",
                  background: active ? "var(--fg)" : "var(--bg)",
                  color: active ? "var(--bg)" : disabled ? "var(--border)" : "var(--muted)",
                  cursor: disabled ? "not-allowed" : "pointer",
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  transition: "background 0.15s, color 0.15s",
                }}
                title={disabled ? "Not available for yearly calendars" : undefined}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Orientation */}
        <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
          {(["landscape", "portrait"] as Orientation[]).map((o) => {
            const active = orientation === o;
            return (
              <button
                key={o}
                onClick={() => setOrientation(o)}
                style={{
                  height: 40,
                  padding: "0 14px",
                  border: "none",
                  borderRight: "1px solid var(--border)",
                  background: active ? "var(--fg)" : "var(--bg)",
                  color: active ? "var(--bg)" : "var(--muted)",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: active ? 600 : 400,
                  transition: "background 0.15s, color 0.15s",
                  textTransform: "capitalize",
                }}
              >
                {o === "landscape" ? "⬜ Landscape" : "▭ Portrait"}
              </button>
            );
          })}
        </div>

        {/* Download */}
        <button
          onClick={handleDownload}
          disabled={loading}
          style={{
            height: 40,
            padding: "0 20px",
            border: "none",
            borderRadius: 8,
            background: "var(--fg)",
            color: "var(--bg)",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: 13,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 6,
            opacity: loading ? 0.6 : 1,
            transition: "opacity 0.2s",
          }}
        >
          {loading ? "Generating…" : "↓ Download PDF"}
        </button>
      </div>

      {isYearly && (
        <p style={{ fontSize: 11, color: "var(--muted)", margin: 0 }}>
          A6 is not available for yearly calendars
        </p>
      )}
      {error && (
        <p style={{ fontSize: 12, color: "var(--holiday)", margin: 0 }}>{error}</p>
      )}
    </div>
  );
}
