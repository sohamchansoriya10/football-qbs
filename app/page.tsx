"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownUp, Database, ExternalLink, Search, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { divisions, quarterbacks, source, type Quarterback } from "@/lib/quarterbacks";
import { fetchQuarterbacks } from "@/lib/supabase";

type SortKey = "rank" | "experienceYear" | "mobility" | "pressure";

const sortLabels: Record<SortKey, string> = {
  rank: "QB Index rank",
  experienceYear: "Experience",
  mobility: "Mobility",
  pressure: "Pressure"
};

function scoreFromRank(rank: number) {
  return Math.round(((33 - rank) / 32) * 100);
}

function average(items: Quarterback[], key: "mobility" | "pressure") {
  if (!items.length) return 0;
  return Math.round(items.reduce((sum, qb) => sum + qb[key], 0) / items.length);
}

function averageIndex(items: Quarterback[], conference: "AFC" | "NFC") {
  const group = items.filter((qb) => qb.conference === conference);
  if (!group.length) return 0;
  return Math.round(
    group.reduce((sum, qb) => sum + scoreFromRank(qb.rank), 0) / group.length
  );
}

function openingCompare(items: Quarterback[]) {
  return [items[0], items[3], items[8]].filter((qb): qb is Quarterback => Boolean(qb));
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState<(typeof divisions)[number]>("All");
  const [sort, setSort] = useState<SortKey>("rank");
  const [items, setItems] = useState<Quarterback[]>(quarterbacks);
  const [selected, setSelected] = useState<Quarterback[]>(openingCompare(quarterbacks));

  useEffect(() => {
    fetchQuarterbacks().then((rows) => {
      if (rows?.length) {
        setItems(rows);
        setSelected(openingCompare(rows));
      }
    });
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return items
      .filter((qb) => {
        const matchesDivision =
          division === "All" || `${qb.conference} ${qb.division}` === division;
        const matchesQuery =
          !term ||
          qb.name.toLowerCase().includes(term) ||
          qb.team.toLowerCase().includes(term) ||
          qb.abbr.toLowerCase().includes(term);
        return matchesDivision && matchesQuery;
      })
      .sort((a, b) => {
        if (sort === "rank") return a.rank - b.rank;
        return b[sort] - a[sort];
      });
  }, [division, items, query, sort]);

  const tierOne = items.filter((qb) => qb.tier === 1);
  const youngStarters = items.filter((qb) => qb.experienceYear <= 3).length;
  const afcAverage = averageIndex(items, "AFC");
  const nfcAverage = averageIndex(items, "NFC");

  function toggleCompare(qb: Quarterback) {
    setSelected((current) => {
      if (current.some((item) => item.name === qb.name)) {
        return current.filter((item) => item.name !== qb.name);
      }
      return [...current.slice(-2), qb];
    });
  }

  return (
    <main className="min-h-screen">
      <section
        className="border-b bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(13,104,96,.94), rgba(31,41,55,.94)), url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=2200&q=80')"
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div className="flex min-h-[440px] flex-col justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">2026 Week 1 dataset</Badge>
              <Badge className="bg-white/10 text-white backdrop-blur">Supabase ready</Badge>
              <Badge className="bg-white/10 text-white backdrop-blur">Shadcn UI</Badge>
            </div>
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
                QB Compass
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/90">
                Compare every projected 2026 NFL Week 1 starting quarterback by rank,
                tier, experience, mobility, pressure, and team context.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <a href="#compare">
                    <Sparkles className="h-4 w-4" />
                    Open comparator
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={source.url} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View source
                  </a>
                </Button>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Starter list and ranks sourced from {source.name}, published {source.date}.
            </p>
          </div>

          <div className="grid content-end gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Top tier QBs", tierOne.length, "Allen, Stafford, Mahomes, Maye"],
              ["Young starters", youngStarters, "Year 3 or earlier"],
              ["AFC index avg", afcAverage, "Composite from NFL rank"],
              ["NFC index avg", nfcAverage, "Composite from NFL rank"]
            ].map(([label, value, note]) => (
              <Card key={label} className="border-white/20 bg-white/10 text-white backdrop-blur">
                <CardHeader className="pb-2">
                  <CardDescription className="text-white/70">{label}</CardDescription>
                  <CardTitle className="text-4xl">{value}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-white/75">{note}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scout Board</CardTitle>
                <CardDescription>Search, filter, sort, then tap rows to compare up to three quarterbacks.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <label className="space-y-2 text-sm font-medium">
                  Search
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      placeholder="Name, team, or abbreviation"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                </label>
                <label className="space-y-2 text-sm font-medium">
                  Division
                  <select
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                    value={division}
                    onChange={(event) => setDivision(event.target.value as (typeof divisions)[number])}
                  >
                    {divisions.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm font-medium">
                  Sort by
                  <select
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                    value={sort}
                    onChange={(event) => setSort(event.target.value as SortKey)}
                  >
                    {Object.entries(sortLabels).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <CardTitle>Supabase Schema</CardTitle>
                </div>
                <CardDescription>Use the SQL file in this project to create and seed the table.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                The table stores source rank/tier plus local comparison scores for the interactive dashboard.
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {selected.map((qb) => (
                <Card key={qb.name} className="overflow-hidden">
                  <div className="h-2 bg-accent" />
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <CardTitle>{qb.name}</CardTitle>
                        <CardDescription>{qb.team}</CardDescription>
                      </div>
                      <Badge>#{qb.rank}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <Metric label="Tier" value={qb.tier} />
                      <Metric label="Year" value={qb.experienceYear} />
                      <Metric label="Index" value={scoreFromRank(qb.rank)} />
                    </div>
                    <Bar label="Mobility" value={qb.mobility} />
                    <Bar label="Pressure" value={qb.pressure} />
                    <p className="min-h-20 text-sm leading-6 text-muted-foreground">{qb.outlook}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <CardTitle>All 32 Starters</CardTitle>
                    <CardDescription>{filtered.length} quarterbacks shown</CardDescription>
                  </div>
                  <Badge variant="outline">
                    <ArrowDownUp className="mr-1 h-3.5 w-3.5" />
                    {sortLabels[sort]}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Quarterback</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead>Tier</TableHead>
                      <TableHead>Profile</TableHead>
                      <TableHead>Mobility</TableHead>
                      <TableHead>Pressure</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((qb) => {
                      const active = selected.some((item) => item.name === qb.name);
                      return (
                        <TableRow
                          key={qb.name}
                          className={active ? "bg-muted/70" : ""}
                          onClick={() => toggleCompare(qb)}
                        >
                          <TableCell className="font-black">#{qb.rank}</TableCell>
                          <TableCell>
                            <div className="font-semibold">{qb.name}</div>
                            <div className="text-xs text-muted-foreground">{qb.conference} {qb.division}</div>
                          </TableCell>
                          <TableCell>{qb.team}</TableCell>
                          <TableCell>
                            <Badge variant={qb.tier <= 2 ? "default" : qb.tier <= 4 ? "outline" : "secondary"}>
                              Tier {qb.tier}
                            </Badge>
                          </TableCell>
                          <TableCell>{qb.style}</TableCell>
                          <TableCell>{qb.mobility}</TableCell>
                          <TableCell>{qb.pressure}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <CardTitle>Conference Pulse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Bar label="AFC average QB index" value={afcAverage} />
                  <Bar label="NFC average QB index" value={nfcAverage} />
                  <Bar label="League mobility average" value={average(items, "mobility")} />
                  <Bar label="League pressure average" value={average(items, "pressure")} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                  <p>
                    Official fields: player, team, rank, tier, and NFL experience year. Local fields:
                    mobility, pressure, style, and outlook are dashboard labels created for this assignment.
                  </p>
                  <p>
                    The Supabase seed file mirrors this dataset and keeps the source URL/date attached to every row.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border bg-muted/40 p-3">
      <div className="text-xl font-black">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-semibold uppercase text-muted-foreground">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div className="h-2 rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
