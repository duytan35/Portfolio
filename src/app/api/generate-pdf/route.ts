import puppeteer from "puppeteer";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
  const headersList = await headers();
  const referer = headersList.get("referer");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${referer}/?from=puppeteer`, {
    waitUntil: "networkidle2", // Ensures all assets (CSS & images) are loaded
  });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true, // Ensures CSS background styles are included
  });

  await browser.close();

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=page.pdf",
    },
  });
}
