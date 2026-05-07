import { NextRequest, NextResponse } from "next/server";
import { getHolidays, buildCalendarDays, getCountryConfig } from "@/lib/holidays";
import { MONTH_NAMES, DAY_NAMES } from "@/lib/types";

export const dynamic = "force-dynamic";

type PaperSize = "A3" | "A4" | "A5" | "A6";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const country = searchParams.get("country") ?? "us";
  const year = Number(searchParams.get("year") ?? new Date().getFullYear());
  const monthParam = searchParams.get("month");
  const size = (searchParams.get("size") ?? "A4") as PaperSize;

  const config = getCountryConfig(country);
  if (!config) {
    return NextResponse.json({ error: "Invalid country" }, { status: 400 });
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
    html = generateMonthlyHTML({ days, year, month, countryName: config.name, size });
    filename = `calendar-${country}-${year}-${String(month).padStart(2, "0")}.pdf`;
  } else {
    html = generateYearlyHTML({ year, countryCode: config.code, countryName: config.name, size });
    filename = `calendar-${country}-${year}.pdf`;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdf = await page.pdf({
      format: size,
      landscape: true,
      printBackground: true,
      margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
    });
    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("PDF generation failed:", err);
    return NextResponse.json(
      { error: "PDF generation failed. Ensure puppeteer is installed." },
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
}

function generateMonthlyHTML({ days, year, month, countryName, size }: MonthlyParams): string {
  const monthName = MONTH_NAMES[month - 1];

  const headers = DAY_NAMES.map((name, i) => {
    const color = i === 0 ? "#dc2626" : i === 6 ? "#525252" : "#737373";
    return `<div style="font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${color};text-align:center;padding:8px 0;border-right:1px solid #e5e5e5;border-bottom:2px solid #0a0a0a;">${name}</div>`;
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

    return `<div style="border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;padding:8px;background:white;opacity:${isOther ? "0.2" : "1"};">
      <div style="font-family:'Courier New',monospace;font-size:12px;font-weight:500;color:${numColor};">${day.date.getDate()}</div>
      ${day.holiday && day.isCurrentMonth ? `<div style="font-size:9px;color:#dc2626;margin-top:3px;line-height:1.3;">${day.holiday.name}</div>` : ""}
    </div>`;
  }).join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${monthName} ${year} — ${countryName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: white; color: #0a0a0a; overflow: hidden; }
    @page { size: ${size} landscape; margin: 12mm; }
    .grid { display: grid; grid-template-columns: repeat(7, 1fr); border-top: 1px solid #e5e5e5; border-left: 1px solid #e5e5e5; page-break-inside: avoid; break-inside: avoid; }
  </style>
</head>
<body>
  <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:20px;">
    <h1 style="font-size:42px;font-weight:300;letter-spacing:-0.03em;font-family:Georgia,serif;">
      ${monthName} <span style="opacity:0.4;">${year}</span>
    </h1>
    <span style="font-size:12px;color:#737373;font-weight:500;">${countryName}</span>
  </div>
  <div class="grid">
    ${headers}
    ${cells}
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
}

function generateYearlyHTML({ year, countryCode, countryName, size }: YearlyParams): string {
  const holidays = getHolidays(countryCode, year);

  const monthsHTML = MONTH_NAMES.map((name, i) => {
    const month = i + 1;
    const days = buildCalendarDays(year, month, holidays);

    const headers = DAY_NAMES.map((d, di) => {
      const color = di === 0 ? "#dc2626" : di === 6 ? "#525252" : "#a3a3a3";
      return `<div style="border-right:1px solid #e5e5e5;border-bottom:1px solid #0a0a0a;padding:2px 0;text-align:center;font-size:7px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:${color};">${d.slice(0, 1)}</div>`;
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

      return `<div style="border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;padding:1px 0;text-align:center;font-size:8px;font-family:'Courier New',monospace;color:${color};opacity:${isOther ? "0.18" : "1"};background:white;">${day.date.getDate()}</div>`;
    }).join("");

    return `<div style="border:1px solid #e5e5e5;border-radius:3px;padding:6px;overflow:hidden;display:flex;flex-direction:column;min-height:0;">
      <div style="font-family:Georgia,serif;font-size:11px;font-weight:400;margin-bottom:4px;color:#0a0a0a;flex-shrink:0;">${name}</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid #e5e5e5;border-left:1px solid #e5e5e5;flex:1;">
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
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: white; overflow: hidden; }
    @page { size: ${size} landscape; margin: 12mm; }
  </style>
</head>
<body>
  <div style="display:flex;flex-direction:column;height:100vh;">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;flex-shrink:0;">
      <h1 style="font-size:32px;font-weight:300;letter-spacing:-0.03em;font-family:Georgia,serif;">${year}</h1>
      <span style="font-size:11px;color:#737373;">${countryName}</span>
    </div>
    <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,1fr);gap:8px;min-height:0;overflow:hidden;">
      ${monthsHTML}
    </div>
  </div>
</body>
</html>`;
}
