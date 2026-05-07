"use client";

import { useState } from "react";

interface DownloadButtonProps {
  country: string;
  year: number;
  month: number;
}

export default function DownloadButton({ country, year, month }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/pdf?country=${country}&year=${year}&month=${month}`
      );
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `calendar-${country}-${year}-${String(month).padStart(2, "0")}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      // Fallback: browser print
      window.print();
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="no-print" style={{ display: "flex", gap: 8 }}>
      <button
        onClick={handlePrint}
        style={{
          height: 40,
          padding: "0 16px",
          border: "1px solid var(--border)",
          borderRadius: 8,
          background: "transparent",
          color: "var(--fg)",
          cursor: "pointer",
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        ⎙ Print
      </button>

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
  );
}
