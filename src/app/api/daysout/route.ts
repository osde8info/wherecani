import { getDaysOut } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const daysOut = await getDaysOut();
    return NextResponse.json(daysOut);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch days out" }, { status: 500 });
  }
}
