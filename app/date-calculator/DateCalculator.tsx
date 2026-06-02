"use client";

import { useState } from "react";

type Tab = "between" | "add" | "countdown";

export interface DateCalcI18n {
  title: string;
  description: string;
  tabBetween: string;
  tabAddSubtract: string;
  tabUntil: string;
  startDate: string;
  endDate: string;
  totalDays: string;
  weeks: string;
  businessDays: string;
  monFriOnly: string;
  aboutTitle: string;
  aboutBetweenTitle: string;
  aboutBetweenDesc: string;
  aboutAddTitle: string;
  aboutAddDesc: string;
  aboutUntilTitle: string;
  aboutUntilDesc: string;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function countBusinessDays(start: Date, end: Date): number {
  let count = 0;
  const cur = new Date(start);
  while (cur <= end) {
    const day = cur.getDay();
    if (day !== 0 && day !== 6) count++;
    cur.setDate(cur.getDate() + 1);
  }
  return count;
}

function BetweenDates({ i18n }: { i18n: DateCalcI18n }) {
  const today = new Date().toISOString().slice(0, 10);
  const [start, setStart] = useState(today);
  const [end, setEnd] = useState(today);

  const startDate = new Date(start + "T00:00:00");
  const endDate = new Date(end + "T00:00:00");
  const msPerDay = 86400000;
  const diffMs = endDate.getTime() - startDate.getTime();
  const totalDays = Math.round(diffMs / msPerDay);
  const absDays = Math.abs(totalDays);
  const weeks = (absDays / 7).toFixed(1);
  const bizDays = totalDays >= 0 ? countBusinessDays(startDate, endDate) : countBusinessDays(endDate, startDate);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{i18n.startDate}</span>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} style={inputStyle} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{i18n.endDate}</span>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} style={inputStyle} />
        </label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <ResultCard label={i18n.totalDays} value={totalDays >= 0 ? `${absDays}` : `-${absDays}`} note={totalDays < 0 ? "end is before start" : undefined} />
        <ResultCard label={i18n.weeks} value={weeks} />
        <ResultCard label={i18n.businessDays} value={String(bizDays)} note={i18n.monFriOnly} />
      </div>
    </div>
  );
}

function AddSubtractDays({ i18n }: { i18n: DateCalcI18n }) {
  const today = new Date().toISOString().slice(0, 10);
  const [base, setBase] = useState(today);
  const [days, setDays] = useState("30");
  const [op, setOp] = useState<"add" | "sub">("add");

  const baseDate = new Date(base + "T00:00:00");
  const daysNum = parseInt(days) || 0;
  const result = new Date(baseDate);
  result.setDate(result.getDate() + (op === "add" ? daysNum : -daysNum));

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, alignItems: "end", marginBottom: 24 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Base Date</span>
          <input type="date" value={base} onChange={(e) => setBase(e.target.value)} style={inputStyle} />
        </label>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Op</span>
          <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
            {(["add", "sub"] as const).map((o) => (
              <button key={o} onClick={() => setOp(o)} style={{ padding: "10px 16px", background: op === o ? "var(--fg)" : "transparent", color: op === o ? "var(--bg)" : "var(--muted)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500 }}>
                {o === "add" ? "+" : "−"}
              </button>
            ))}
          </div>
        </div>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Days</span>
          <input type="number" min="0" value={days} onChange={(e) => setDays(e.target.value)} style={inputStyle} />
        </label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <ResultCard label="Result Date" value={result.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} />
        <ResultCard label="Day of Week" value={result.toLocaleDateString("en-US", { weekday: "long" })} />
      </div>
    </div>
  );
}

function DaysUntil({ i18n }: { i18n: DateCalcI18n }) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [target, setTarget] = useState(tomorrow.toISOString().slice(0, 10));

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const targetDate = new Date(target + "T00:00:00");
  const msPerDay = 86400000;
  const diffDays = Math.round((targetDate.getTime() - now.getTime()) / msPerDay);
  const absDays = Math.abs(diffDays);
  const weeks = (absDays / 7).toFixed(1);
  const months = (absDays / 30.44).toFixed(1);
  const isPast = diffDays < 0;

  return (
    <div>
      <label style={{ display: "flex", flexDirection: "column", gap: 6, maxWidth: 320, marginBottom: 24 }}>
        <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Target Date</span>
        <input type="date" value={target} onChange={(e) => setTarget(e.target.value)} style={inputStyle} />
      </label>
      <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
        {formatDate(targetDate)}{isPast ? " — this date has already passed." : ""}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <ResultCard label={isPast ? "Days Ago" : "Days Away"} value={isPast ? `-${absDays}` : String(absDays)} highlight />
        <ResultCard label={i18n.weeks} value={weeks} />
        <ResultCard label="Months" value={months} note="approx." />
      </div>
    </div>
  );
}

function ResultCard({ label, value, note, highlight }: { label: string; value: string; note?: string; highlight?: boolean }) {
  return (
    <div style={{ border: `1px solid ${highlight ? "var(--fg)" : "var(--border)"}`, borderRadius: 10, padding: "20px 20px", background: highlight ? "var(--fg)" : "transparent" }}>
      <p style={{ fontSize: 11, color: highlight ? "var(--bg)" : "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8, opacity: highlight ? 0.7 : 1 }}>{label}</p>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 28, fontWeight: 500, color: highlight ? "var(--bg)" : "var(--fg)", lineHeight: 1 }}>{value}</p>
      {note && <p style={{ fontSize: 11, color: highlight ? "var(--bg)" : "var(--muted)", marginTop: 6, opacity: 0.7 }}>{note}</p>}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 14px",
  border: "1px solid var(--border)",
  borderRadius: 8,
  background: "var(--bg)",
  color: "var(--fg)",
  fontSize: 14,
  fontFamily: "'DM Sans', system-ui, sans-serif",
  width: "100%",
  boxSizing: "border-box",
};

export default function DateCalculator({ i18n }: { i18n: DateCalcI18n }) {
  const TAB_LABELS: Record<Tab, string> = {
    between: i18n.tabBetween,
    add: i18n.tabAddSubtract,
    countdown: i18n.tabUntil,
  };

  const [tab, setTab] = useState<Tab>("between");

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 96px" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16 }}>
          {i18n.title}
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6 }}>{i18n.description}</p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid var(--border)", paddingBottom: 0 }}>
        {(Object.keys(TAB_LABELS) as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{ padding: "10px 18px", border: "none", background: "transparent", color: tab === t ? "var(--fg)" : "var(--muted)", fontSize: 14, fontWeight: tab === t ? 600 : 400, cursor: "pointer", borderBottom: tab === t ? "2px solid var(--fg)" : "2px solid transparent", marginBottom: "-1px", fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "nowrap" }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "32px 28px", marginBottom: 48 }}>
        {tab === "between" && <BetweenDates i18n={i18n} />}
        {tab === "add" && <AddSubtractDays i18n={i18n} />}
        {tab === "countdown" && <DaysUntil i18n={i18n} />}
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 40 }}>
        <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 22, fontWeight: 400, marginBottom: 20 }}>{i18n.aboutTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          {([
            [i18n.aboutBetweenTitle, i18n.aboutBetweenDesc],
            [i18n.aboutAddTitle, i18n.aboutAddDesc],
            [i18n.aboutUntilTitle, i18n.aboutUntilDesc],
          ] as [string, string][]).map(([title, desc]) => (
            <div key={title}>
              <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
