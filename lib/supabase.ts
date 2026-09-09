import { createClient } from "@supabase/supabase-js";
import type { Quarterback } from "@/lib/quarterbacks";

type QuarterbackRow = {
  rank: number;
  tier: number;
  name: string;
  team: string;
  abbr: string;
  conference: "AFC" | "NFC";
  division: "East" | "North" | "South" | "West";
  experience_year: number;
  style: Quarterback["style"];
  mobility: number;
  pressure: number;
  outlook: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function fetchQuarterbacks(): Promise<Quarterback[] | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("quarterbacks")
    .select("rank,tier,name,team,abbr,conference,division,experience_year,style,mobility,pressure,outlook")
    .order("rank");

  if (error || !data) return null;

  return (data as QuarterbackRow[]).map((row) => ({
    rank: row.rank,
    tier: row.tier,
    name: row.name,
    team: row.team,
    abbr: row.abbr,
    conference: row.conference,
    division: row.division,
    experienceYear: row.experience_year,
    style: row.style,
    mobility: row.mobility,
    pressure: row.pressure,
    outlook: row.outlook
  }));
}
