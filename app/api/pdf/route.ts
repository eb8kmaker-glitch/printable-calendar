import { NextRequest, NextResponse } from "next/server";
import { getHolidays, buildCalendarDays, getCountryConfig } from "@/lib/holidays";
import { MONTH_NAMES, DAY_NAMES } from "@/lib/types";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const country = searchParams.get("country") ?? "us";
  const year = Number(searchParams.get("year") ?? new Date().getFullYear());
  const month = Number(searchParams.get("month") ?? new Date().getMonth() + 1);

  const config = getCountryConfig(country);
  if (!config) {
    return NextResponse.json({ error: "Invalid country" }, { status: 400 });
  }

  const holidays = getHolidays(config.code, year);
  const days = buildCalendarDays(year, month, holidays);
  const monthName = MONTH_NAMES[month - 1];

  // Generate clean HTML for PDF
  const html = generateCalendarHTML({
    days,
    year,
    month,
    monthName,
    countryName: config.name,
  });

  // Try Puppeteer, fall back to HTML
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdf = await page.pdf({
      format: "A4",
      landscape: true,
      printBackground: true,
      margin: { top: "15mm", right: "15mm", bottom: "15mm", left: "15mm" },
    });
    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="calendar-${country}-${year}-${String(month).padStart(2, "0")}.pdf"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    // Fallback: return the printable HTML
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": `inline; filename="calendar-${country}-${year}-${String(month).padStart(2, "0")}.html"`,
      },
    });
  }
}

interface GenerateHTMLParams {
  days: ReturnType<typeof buildCalendarDays>;
  year: number;
  month: number;
  monthName: string;
  countryName: string;
}

function generateCalendarHTML({
  days,
  year,
  monthName,
  countryName,
}: GenerateHTMLParams): string {
  const cells = days
    .map((day) => {
      const dow = day.date.getDay();
      const isSun = dow === 0;
      const isSat = dow === 6;
      const isOther = !day.isCurrentMonth;
      const numColor = isSun ? "#dc2626" : isSat ? "#525252" : "#0a0a0a";
      return `
      <div style="
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        padding: 8px;
        min-height: 80px;
        background: white;
        opacity: ${isOther ? "0.25" : "1"};
      ">
        <div style="
          font-family: 'Courier New', monospace;
          font-size: 12px;
          font-weight: 500;
          color: ${numColor};
        ">${day.date.getDate()}</div>
        ${
          day.holiday && day.isCurrentMonth
            ? `<div style="font-size: 9px; color: #dc2626; margin-top: 3px; line-height: 1.3;">${day.holiday.name}</div>`
            : ""
        }
      </div>
    `;
    })
    .join("");

  const headers = DAY_NAMES.map((name, i) => {
    const color = i === 0 ? "#dc2626" : i === 6 ? "#525252" : "#737373";
    return `
      <div style="
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${color};
        text-align: center;
        padding: 8px 0;
        border-right: 1px solid #e5e5e5;
        border-bottom: 2px solid #0a0a0a;
      ">${name}</div>
    `;
  }).join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${monthName} ${year} — ${countryName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: white; color: #0a0a0a; padding: 0; }
    .grid { display: grid; grid-template-columns: repeat(7, 1fr); border-top: 1px solid #e5e5e5; border-left: 1px solid #e5e5e5; }
    @page { size: A4 landscape; margin: 15mm; }
  </style>
</head>
<body>
  <div style="padding: 0;">
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px;">
      <h1 style="font-size: 42px; font-weight: 300; letter-spacing: -0.03em; font-family: Georgia, serif;">
        ${monthName} <span style="opacity: 0.4;">${year}</span>
      </h1>
      <span style="font-size: 12px; color: #737373; font-weight: 500;">${countryName}</span>
    </div>
    <div class="grid">
      ${headers}
      ${cells}
    </div>
  </div>
</body>
</html>`;
}
