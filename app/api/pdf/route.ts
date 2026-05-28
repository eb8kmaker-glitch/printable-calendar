import { NextRequest, NextResponse } from "next/server";
import { getHolidays, buildCalendarDays, getCountryConfig } from "@/lib/holidays";
import { MONTH_NAMES, DAY_NAMES } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PaperSize = "A3" | "A4" | "A5" | "A6";
type Orientation = "landscape" | "portrait";
type Theme = "light" | "dark";

// ─── Theme color tokens ───────────────────────────────────────────────────────

interface ThemeColors {
  pageBg: string;
  cellBg: string;
  gridLine: string;
  strongBorder: string;  // day-header bottom line
  titleColor: string;
  subtitleColor: string;
  weekdayColor: string;
  dateColor: string;     // regular weekday date
  sundayColor: string;
  saturdayColor: string;
  holidayColor: string;
}

const THEMES: Record<Theme, ThemeColors> = {
  light: {
    pageBg:       "white",
    cellBg:       "white",
    gridLine:     "#e5e5e5",
    strongBorder: "#0a0a0a",
    titleColor:   "#0a0a0a",
    subtitleColor:"#737373",
    weekdayColor: "#737373",
    dateColor:    "#0a0a0a",
    sundayColor:  "#dc2626",
    saturdayColor:"#525252",
    holidayColor: "#dc2626",
  },
  dark: {
    pageBg:       "#111111",
    cellBg:       "#1a1a1a",
    gridLine:     "#3a3a3a",
    strongBorder: "#555555",
    titleColor:   "#f5f5f5",
    subtitleColor:"#a0a0a0",
    weekdayColor: "#888888",
    dateColor:    "#f5f5f5",
    sundayColor:  "#ff6b6b",
    saturdayColor:"#7ab6ff",
    holidayColor: "#ff6b6b",
  },
};

// Font weight for date numbers — A6 dark needs heavier weight for readability
function dateWeight(size: PaperSize, theme: Theme): number {
  if (theme === "dark" && size === "A6") return 600;
  if (theme === "dark") return 500;
  return 500;
}

// CSS pixel dimensions at 96 DPI, landscape orientation (w > h)
// 1mm = 96/25.4 ≈ 3.7795px
const PAPER_PX: Record<PaperSize, { w: number; h: number }> = {
  A3: { w: 1587, h: 1122 }, // 420 × 297 mm
  A4: { w: 1122, h: 794 },  // 297 × 210 mm
  A5: { w: 794,  h: 559 },  // 210 × 148 mm
  A6: { w: 559,  h: 397 },  // 148 × 105 mm
};

// Per-size layout tokens
interface SizeConfig {
  titleSize: number;
  subtitleSize: number;
  dayHeaderSize: number;
  dateNumSize: number;
  holidaySize: number;    // 0 = dot indicator only
  cellPadH: string;
  cellPadV: string;
  margin: string;         // CSS padding used as page inset
  headerMB: string;
  // Yearly
  yearTitleSize: number;
  yearMonthTitleSize: number;
  yearDayHeaderSize: number;
  yearDateSize: number;
  yearCellPad: string;
  yearGap: string;
  // Grid layout [cols, rows] per orientation
  yearGrid: { landscape: [number, number]; portrait: [number, number] };
}

const SIZE_CONFIG: Record<PaperSize, SizeConfig> = {
  A3: {
    titleSize: 56, subtitleSize: 13, dayHeaderSize: 12, dateNumSize: 16,
    holidaySize: 11, cellPadH: "14px", cellPadV: "10px",
    margin: "15mm", headerMB: "28px",
    yearTitleSize: 44, yearMonthTitleSize: 16, yearDayHeaderSize: 10,
    yearDateSize: 11, yearCellPad: "10px", yearGap: "12px",
    yearGrid: { landscape: [4, 3], portrait: [3, 4] },
  },
  A4: {
    titleSize: 42, subtitleSize: 12, dayHeaderSize: 10, dateNumSize: 13,
    holidaySize: 9, cellPadH: "8px", cellPadV: "6px",
    margin: "12mm", headerMB: "20px",
    yearTitleSize: 32, yearMonthTitleSize: 12, yearDayHeaderSize: 8,
    yearDateSize: 9, yearCellPad: "7px", yearGap: "8px",
    yearGrid: { landscape: [4, 3], portrait: [3, 4] },
  },
  A5: {
    titleSize: 28, subtitleSize: 10, dayHeaderSize: 8, dateNumSize: 11,
    holidaySize: 7, cellPadH: "6px", cellPadV: "5px",
    margin: "10mm", headerMB: "14px",
    yearTitleSize: 24, yearMonthTitleSize: 10, yearDayHeaderSize: 7,
    yearDateSize: 8, yearCellPad: "5px", yearGap: "6px",
    yearGrid: { landscape: [4, 3], portrait: [2, 6] },
  },
  A6: {
    titleSize: 18, subtitleSize: 8, dayHeaderSize: 7, dateNumSize: 9,
    holidaySize: 0, cellPadH: "3px", cellPadV: "2px",
    margin: "6mm", headerMB: "8px",
    // A6 yearly is disabled in the UI; these values are unused
    yearTitleSize: 0, yearMonthTitleSize: 0, yearDayHeaderSize: 0,
    yearDateSize: 0, yearCellPad: "0", yearGap: "0",
    yearGrid: { landscape: [4, 3], portrait: [3, 4] },
  },
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const country = searchParams.get("country") ?? "us";
  const year = Number(searchParams.get("year") ?? new Date().getFullYear());
  const monthParam = searchParams.get("month");
  const size = (searchParams.get("size") ?? "A4") as PaperSize;
  const orientation = (searchParams.get("orientation") ?? "landscape") as Orientation;
  const theme = (searchParams.get("theme") ?? "light") as Theme;

  // ── New optional decoration params ────────────────────────────────────────
  const headerText  = searchParams.get("headerText") ?? "";
  const targetDate  = searchParams.get("targetDate") ?? "";   // YYYY-MM-DD
  const targetLabel = searchParams.get("targetLabel") ?? "";
  let dayLabels: Record<string, string> = {};
  try {
    const raw = searchParams.get("dayLabels");
    if (raw) dayLabels = JSON.parse(raw);
  } catch { /* ignore invalid JSON */ }

  const config = getCountryConfig(country);
  if (!config) {
    return NextResponse.json({ error: "Invalid country" }, { status: 400 });
  }

  // Guard: A6 yearly not supported
  if (!monthParam && size === "A6") {
    return NextResponse.json({ error: "A6 is not available for yearly calendars" }, { status: 400 });
  }

  let html: string;
  let filename: string;

  if (monthParam) {
    const month = Number(monthParam);
    if (isNaN(month) || month < 1 || month > 12) {
      return NextResponse.json({ error: "Invalid month" }, { status: 400 });
    }
    const holidays = getHolidays(config.code, year);
    const days = buildCalendarDays(year, month, holidays);
    html = generateMonthlyHTML({ days, year, month, countryName: config.name, size, orientation, theme, headerText, targetDate, targetLabel, dayLabels });
    const themeSuffix = theme === "dark" ? "-dark" : "";
    filename = `calendar-${country}-${year}-${String(month).padStart(2, "0")}${themeSuffix}.pdf`;
  } else {
    html = generateYearlyHTML({ year, countryCode: config.code, countryName: config.name, size, orientation, theme });
    const themeSuffix = theme === "dark" ? "-dark" : "";
    filename = `calendar-${country}-${year}${themeSuffix}.pdf`;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const chromium = require("@sparticuz/chromium");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const puppeteer = require("puppeteer-core");

    // Set viewport to exact paper pixel dimensions so CSS viewport units are accurate
    const { w, h } = PAPER_PX[size];
    const vpW = orientation === "landscape" ? w : h;
    const vpH = orientation === "landscape" ? h : w;

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width: vpW, height: vpH, deviceScaleFactor: 1 },
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: size,
      landscape: orientation === "landscape",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    await browser.close();

    // Personalized PDFs (targetDate / dayLabels) must not be CDN-cached
    const isDecorated = !!targetDate || Object.keys(dayLabels).length > 0;
    return new NextResponse(new Blob([pdf], { type: "application/pdf" }), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": isDecorated ? "no-store" : "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("PDF generation failed:", err);
    return NextResponse.json(
      { error: "PDF generation failed", detail: String(err) },
      { status: 500 }
    );
  }
}

// ─── Monthly HTML ─────────────────────────────────────────────────────────────

interface MonthlyParams {
  days: ReturnType<typeof buildCalendarDays>;
  year: number;
  month: number;
  countryName: string;
  size: PaperSize;
  orientation: Orientation;
  theme: Theme;
  // Decoration params
  headerText?: string;
  targetDate?: string;
  targetLabel?: string;
  dayLabels?: Record<string, string>;
}

function generateMonthlyHTML({
  days, year, month, countryName, size, orientation, theme,
  headerText = "", targetDate = "", targetLabel = "", dayLabels = {},
}: MonthlyParams): string {
  const cfg = SIZE_CONFIG[size];
  const tc = THEMES[theme];
  const monthName = MONTH_NAMES[month - 1];
  const numWeight = dateWeight(size, theme);

  const headers = DAY_NAMES.map((name, i) => {
    const color = i === 0 ? tc.sundayColor : i === 6 ? tc.saturdayColor : tc.weekdayColor;
    const label = size === "A6" ? name.slice(0, 1) : name;
    return `<div style="font-size:${cfg.dayHeaderSize}px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${color};text-align:center;padding:${cfg.cellPadV} ${cfg.cellPadH};border-right:1px solid ${tc.gridLine};border-bottom:2px solid ${tc.strongBorder};">${label}</div>`;
  }).join("");

  const cells = days.map((day) => {
    const dow = day.date.getDay();
    const isSun = dow === 0;
    const isSat = dow === 6;
    const isOther = !day.isCurrentMonth;
    const isHoliday = !!day.holiday && day.isCurrentMonth;
    let numColor = tc.dateColor;
    if (isSun || isHoliday) numColor = tc.sundayColor;
    else if (isSat) numColor = tc.saturdayColor;

    // ── ISO date string ────────────────────────────────────────────────────
    const d = day.date;
    const isoDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const isTargetDate = !!targetDate && isoDate === targetDate && day.isCurrentMonth;

    // ── dayLabel (left bottom) ─────────────────────────────────────────────
    const rawLabel = dayLabels[isoDate] ?? "";
    const isGoldCell = rawLabel.startsWith("★") && day.isCurrentMonth;
    const labelText = day.isCurrentMonth ? (rawLabel.startsWith("★") ? rawLabel.slice(1) : rawLabel) : "";

    // ── D-N (right bottom) — computed for all current-month cells ──────────
    let dNValue = "";
    let dNColor = "#999";
    let dNWeight = 400;
    if (targetDate && day.isCurrentMonth) {
      const diffMs = new Date(targetDate + "T12:00:00").getTime() - new Date(isoDate + "T12:00:00").getTime();
      const diff = Math.round(diffMs / 86400000);
      if (isTargetDate) {
        dNValue = targetLabel || "D-Day";
        dNColor = "#333";
        dNWeight = 700;
      } else if (diff > 0 && diff <= 60) {
        dNValue = `D-${diff}`;
        dNColor = diff <= 7 ? "#e53e3e" : "#999";
      }
    }

    // ── Cell background ────────────────────────────────────────────────────
    let bg = tc.cellBg;
    if (day.isCurrentMonth) {
      if (isTargetDate) bg = "#fef9e7";
      else if (isGoldCell) bg = "#fef3c7";
    }
    const boxShadow = isTargetDate ? "box-shadow:inset 0 0 0 2px #d97706;" : "";

    // ── Holiday label ──────────────────────────────────────────────────────
    let holidayEl = "";
    if (day.holiday && day.isCurrentMonth) {
      if (cfg.holidaySize > 0) {
        holidayEl = `<div style="font-size:${cfg.holidaySize}px;color:${tc.holidayColor};margin-top:2px;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${day.holiday.name}</div>`;
      } else {
        holidayEl = `<div style="width:4px;height:4px;border-radius:50%;background:${tc.holidayColor};margin-top:2px;flex-shrink:0;"></div>`;
      }
    }

    // ── Bottom row: dayLabel (left) + D-N (right) ──────────────────────────
    const hasBottom = !!labelText || !!dNValue;
    const bottomEl = hasBottom
      ? `<div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:auto;padding-top:1px;overflow:hidden;flex-shrink:0;">
          <span style="font-size:9px;color:#888;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${labelText}</span>
          <span style="font-size:9px;color:${dNColor};font-weight:${dNWeight};line-height:1.1;flex-shrink:0;${labelText ? "margin-left:2px;" : "margin-left:auto;"}">${dNValue}</span>
        </div>`
      : "";

    return `<div style="border-right:1px solid ${tc.gridLine};border-bottom:1px solid ${tc.gridLine};padding:${cfg.cellPadV} ${cfg.cellPadH};background:${bg};opacity:${isOther ? "0.2" : "1"};overflow:hidden;display:flex;flex-direction:column;${boxShadow}">
      <div style="font-family:'Courier New',monospace;font-size:${cfg.dateNumSize}px;font-weight:${numWeight};color:${numColor};flex-shrink:0;line-height:1;">${day.date.getDate()}</div>
      ${holidayEl}
      ${bottomEl}
    </div>`;
  }).join("");

  // Header: append headerText next to month name if provided
  const headerSuffix = headerText
    ? ` <span style="font-size:${Math.round(cfg.titleSize * 0.36)}px;color:${tc.subtitleColor};font-weight:400;font-family:'Helvetica Neue',Arial,sans-serif;letter-spacing:normal;opacity:0.8;">· ${headerText}</span>`
    : "";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${monthName} ${year} — ${countryName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: ${tc.pageBg}; color: ${tc.titleColor}; overflow: hidden; }
    @page { size: ${size} ${orientation}; margin: 0; }
    .page { width: 100vw; height: 100vh; padding: ${cfg.margin}; display: flex; flex-direction: column; background: ${tc.pageBg}; }
    .grid { display: grid; grid-template-columns: repeat(7, 1fr); border-top: 1px solid ${tc.gridLine}; border-left: 1px solid ${tc.gridLine}; flex: 1; overflow: hidden; }
    .grid > div { min-height: 0; }
  </style>
</head>
<body>
  <div class="page">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:${cfg.headerMB};flex-shrink:0;">
      <h1 style="font-size:${cfg.titleSize}px;font-weight:300;letter-spacing:-0.03em;font-family:Georgia,serif;line-height:1;color:${tc.titleColor};">
        ${monthName} <span style="opacity:0.45;">${year}</span>${headerSuffix}
      </h1>
      <span style="font-size:${cfg.subtitleSize}px;color:${tc.subtitleColor};font-weight:500;">${countryName}</span>
    </div>
    <div class="grid">
      ${headers}
      ${cells}
    </div>
  </div>
</body>
</html>`;
}

// ─── Yearly HTML ──────────────────────────────────────────────────────────────

interface YearlyParams {
  year: number;
  countryCode: string;
  countryName: string;
  size: PaperSize;
  orientation: Orientation;
  theme: Theme;
}

function generateYearlyHTML({ year, countryCode, countryName, size, orientation, theme }: YearlyParams): string {
  const cfg = SIZE_CONFIG[size];
  const tc = THEMES[theme];
  const [cols, rows] = cfg.yearGrid[orientation];
  const holidays = getHolidays(countryCode, year);

  const monthsHTML = MONTH_NAMES.map((name, i) => {
    const month = i + 1;
    const days = buildCalendarDays(year, month, holidays);

    const headers = DAY_NAMES.map((d, di) => {
      const color = di === 0 ? tc.sundayColor : di === 6 ? tc.saturdayColor : tc.weekdayColor;
      return `<div style="border-right:1px solid ${tc.gridLine};border-bottom:1px solid ${tc.strongBorder};padding:2px 0;text-align:center;font-size:${cfg.yearDayHeaderSize}px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:${color};background:${tc.cellBg};">${d.slice(0, 1)}</div>`;
    }).join("");

    const cells = days.map((day) => {
      const dow = day.date.getDay();
      const isSun = dow === 0;
      const isSat = dow === 6;
      const isOther = !day.isCurrentMonth;
      const isHoliday = !!day.holiday && day.isCurrentMonth;
      let color = tc.dateColor;
      if (isSun || isHoliday) color = tc.sundayColor;
      else if (isSat) color = tc.saturdayColor;

      return `<div style="border-right:1px solid ${tc.gridLine};border-bottom:1px solid ${tc.gridLine};padding:1px 0;text-align:center;font-size:${cfg.yearDateSize}px;font-family:'Courier New',monospace;font-weight:500;color:${color};opacity:${isOther ? "0.15" : "1"};background:${tc.cellBg};overflow:hidden;line-height:1.4;">${day.date.getDate()}</div>`;
    }).join("");

    return `<div style="border:1px solid ${tc.gridLine};border-radius:2px;padding:${cfg.yearCellPad};overflow:hidden;display:flex;flex-direction:column;min-height:0;background:${tc.cellBg};">
      <div style="font-family:Georgia,serif;font-size:${cfg.yearMonthTitleSize}px;font-weight:400;margin-bottom:3px;color:${tc.titleColor};flex-shrink:0;line-height:1;">${name}</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid ${tc.gridLine};border-left:1px solid ${tc.gridLine};flex:1;min-height:0;">
        ${headers}
        ${cells}
      </div>
    </div>`;
  }).join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${year} — ${countryName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: ${tc.pageBg}; overflow: hidden; }
    @page { size: ${size} ${orientation}; margin: 0; }
    .page { width: 100vw; height: 100vh; padding: ${cfg.margin}; display: flex; flex-direction: column; background: ${tc.pageBg}; }
    .months { flex: 1; display: grid; grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr); gap: ${cfg.yearGap}; min-height: 0; overflow: hidden; }
  </style>
</head>
<body>
  <div class="page">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:${cfg.headerMB};flex-shrink:0;">
      <h1 style="font-size:${cfg.yearTitleSize}px;font-weight:300;letter-spacing:-0.03em;font-family:Georgia,serif;line-height:1;color:${tc.titleColor};">${year}</h1>
      <span style="font-size:${cfg.subtitleSize}px;color:${tc.subtitleColor};">${countryName}</span>
    </div>
    <div class="months">
      ${monthsHTML}
    </div>
  </div>
</body>
</html>`;
}
