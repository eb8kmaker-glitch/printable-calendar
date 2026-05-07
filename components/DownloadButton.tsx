"use client";

import { useState } from "react";

type PaperSize = "A3" | "A4" | "A5" | "A6";

interface DownloadButtonProps {
  country: string;
  year: number;
  month?: number; // absent = yearly PDF
}

export default function DownloadButton({ country, year, month }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<PaperSize>("A4");
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ country, year: String(year), size });
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
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value as PaperSize)}
          style={{
            height: 40,
            padding: "0 12px",
            border: "1px solid var(--border)",
            borderRadius: 8,
            background: "var(--bg)",
            color: "var(--fg)",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          <option value="A3">A3</option>
          <option value="A4">A4</option>
          <option value="A5">A5</option>
          <option value="A6">A6</option>
        </select>

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
      {error && (
        <p style={{ fontSize: 12, color: "var(--holiday)", margin: 0 }}>{error}</p>
      )}
    </div>
  );
}
