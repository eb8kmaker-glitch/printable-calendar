import { NextRequest, NextResponse } from "next/server";
import { getHolidays, buildCalendarDays, getCountryConfig } from "@/lib/holidays";
import { MONTH_NAMES, DAY_NAMES } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PaperSize = "A3" | "A4" | "A5" | "A6";
type Orientation = "landscape" | "portrait";

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
    html = generateMonthlyHTML({ days, year, month, countryName: config.name, size, orientation });
    filename = `calendar-${country}-${year}-${String(month).padStart(2, "0")}.pdf`;
  } else {
    html = generateYearlyHTML({ year, countryCode: config.code, countryName: config.name, size, orientation });
    filename = `calendar-${country}-${year}.pdf`;
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

    return new NextResponse(new Blob([pdf], { type: "application/pdf" }), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, max-age=86400",
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
}

function generateMonthlyHTML({ days, year, month, countryName, size, orientation }: MonthlyParams): string {
  const cfg = SIZE_CONFIG[size];
  const monthName = MONTH_NAMES[month - 1];

  const headers = DAY_NAMES.map((name, i) => {
    const color = i === 0 ? "#dc2626" : i === 6 ? "#525252" : "#737373";
    // A6: single letter to save space
    const label = size === "A6" ? name.slice(0, 1) : name;
    return `<div style="font-size:${cfg.dayHeaderSize}px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${color};text-align:center;padding:${cfg.cellPadV} ${cfg.cellPadH};border-right:1px solid #e5e5e5;border-bottom:2px solid #0a0a0a;">${label}</div>`;
  }).join("");

  const cells = days.map((day) => {
    const dow = day.date.getDay();
    const isSun = dow === 0;
    const isSat = dow === 6;
    const isOther = !day.isCurrentMonth;
    const isHoliday = !!day.holiday && day.isCurrentMonth;
    let numColor = "#0a0a0a";
    if (isSun || isHoliday) numColor = "#dc2626";
    else if (isSat) numColor = "#525252";

    // A6+: dot indicator; others: truncated name
    let holidayEl = "";
    if (day.holiday && day.isCurrentMonth) {
      if (cfg.holidaySize > 0) {
        holidayEl = `<div style="font-size:${cfg.holidaySize}px;color:#dc2626;margin-top:2px;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${day.holiday.name}</div>`;
      } else {
        holidayEl = `<div style="width:4px;height:4px;border-radius:50%;background:#dc2626;margin-top:2px;flex-shrink:0;"></div>`;
      }
    }

    return `<div style="border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;padding:${cfg.cellPadV} ${cfg.cellPadH};background:white;opacity:${isOther ? "0.2" : "1"};overflow:hidden;display:flex;flex-direction:column;">
      <div style="font-family:'Courier New',monospace;font-size:${cfg.dateNumSize}px;font-weight:500;color:${numColor};flex-shrink:0;line-height:1;">${day.date.getDate()}</div>
      ${holidayEl}
    </div>`;
  }).join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${monthName} ${year} — ${countryName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: white; color: #0a0a0a; overflow: hidden; }
    @page { size: ${size} ${orientation}; margin: 0; }
    .page { width: 100vw; height: 100vh; padding: ${cfg.margin}; display: flex; flex-direction: column; }
    .grid { display: grid; grid-template-columns: repeat(7, 1fr); border-top: 1px solid #e5e5e5; border-left: 1px solid #e5e5e5; flex: 1; overflow: hidden; }
    .grid > div { min-height: 0; }
  </style>
</head>
<body>
  <div class="page">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:${cfg.headerMB};flex-shrink:0;">
      <h1 style="font-size:${cfg.titleSize}px;font-weight:300;letter-spacing:-0.03em;font-family:Georgia,serif;line-height:1;">
        ${monthName} <span style="opacity:0.4;">${year}</span>
      </h1>
      <span style="font-size:${cfg.subtitleSize}px;color:#737373;font-weight:500;">${countryName}</span>
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
}

function generateYearlyHTML({ year, countryCode, countryName, size, orientation }: YearlyParams): string {
  const cfg = SIZE_CONFIG[size];
  const [cols, rows] = cfg.yearGrid[orientation];
  const holidays = getHolidays(countryCode, year);

  const monthsHTML = MONTH_NAMES.map((name, i) => {
    const month = i + 1;
    const days = buildCalendarDays(year, month, holidays);

    const headers = DAY_NAMES.map((d, di) => {
      const color = di === 0 ? "#dc2626" : di === 6 ? "#525252" : "#a3a3a3";
      return `<div style="border-right:1px solid #e5e5e5;border-bottom:1px solid #0a0a0a;padding:2px 0;text-align:center;font-size:${cfg.yearDayHeaderSize}px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:${color};">${d.slice(0, 1)}</div>`;
    }).join("");

    const cells = days.map((day) => {
      const dow = day.date.getDay();
      const isSun = dow === 0;
      const isSat = dow === 6;
      const isOther = !day.isCurrentMonth;
      const isHoliday = !!day.holiday && day.isCurrentMonth;
      let color = "#0a0a0a";
      if (isSun || isHoliday) color = "#dc2626";
      else if (isSat) color = "#737373";

      return `<div style="border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;padding:1px 0;text-align:center;font-size:${cfg.yearDateSize}px;font-family:'Courier New',monospace;color:${color};opacity:${isOther ? "0.15" : "1"};background:white;overflow:hidden;line-height:1.4;">${day.date.getDate()}</div>`;
    }).join("");

    return `<div style="border:1px solid #e5e5e5;border-radius:2px;padding:${cfg.yearCellPad};overflow:hidden;display:flex;flex-direction:column;min-height:0;">
      <div style="font-family:Georgia,serif;font-size:${cfg.yearMonthTitleSize}px;font-weight:400;margin-bottom:3px;color:#0a0a0a;flex-shrink:0;line-height:1;">${name}</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid #e5e5e5;border-left:1px solid #e5e5e5;flex:1;min-height:0;">
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
    body { background: white; overflow: hidden; }
    @page { size: ${size} ${orientation}; margin: 0; }
    .page { width: 100vw; height: 100vh; padding: ${cfg.margin}; display: flex; flex-direction: column; }
    .months { flex: 1; display: grid; grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr); gap: ${cfg.yearGap}; min-height: 0; overflow: hidden; }
  </style>
</head>
<body>
  <div class="page">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:${cfg.headerMB};flex-shrink:0;">
      <h1 style="font-size:${cfg.yearTitleSize}px;font-weight:300;letter-spacing:-0.03em;font-family:Georgia,serif;line-height:1;">${year}</h1>
      <span style="font-size:${cfg.subtitleSize}px;color:#737373;">${countryName}</span>
    </div>
    <div class="months">
      ${monthsHTML}
    </div>
  </div>
</body>
</html>`;
}
