import { neon } from "@neondatabase/serverless";
import { topDaysOut } from "./daysOut";

export interface DayOut {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  rating: number;
  category: string;
  url?: string;
}

export async function getDaysOut(): Promise<DayOut[]> {
  try {
    const sql = neon(process.env.DATABASE_URL || "");
    const result = await sql`SELECT id, title, description, image, location, rating, category, url FROM daysout ORDER BY id`;
    return result as DayOut[];
  } catch (error) {
    console.error("Failed to fetch from database, using fallback:", error);
    return topDaysOut;
  }
}
