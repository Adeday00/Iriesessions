"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ArchiveRow = readonly [string, string, string, string];

const FILTERS: { label: string; match: (href: string) => boolean }[] = [
  { label: "All", match: () => true },
  { label: "Music", match: (href) => href.startsWith("/music") },
  { label: "Sessions", match: (href) => href.startsWith("/sessions") },
  { label: "Shop", match: (href) => href.startsWith("/shop") },
  { label: "Opportunities", match: (href) => href.startsWith("/opportunities") },
];

export function JournalArchive({ items }: { items: readonly ArchiveRow[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const active = FILTERS.find((entry) => entry.label === filter) ?? FILTERS[0];
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      items.filter(([title, type, year, href]) => {
        if (!active.match(href)) {
          return false;
        }
        if (normalizedQuery === "") {
          return true;
        }
        return `${title} ${type} ${year}`.toLowerCase().includes(normalizedQuery);
      }),
    [items, active, normalizedQuery],
  );

  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-5 border-b border-white/15 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((entry) => {
            const isActive = entry.label === filter;
            return (
              <button
                key={entry.label}
                type="button"
                onClick={() => setFilter(entry.label)}
                aria-pressed={isActive}
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive
                    ? "border-[#b9ff3b] bg-[#b9ff3b] text-black"
                    : "border-white/20 text-[#c8c0b4] hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
                }`}
              >
                {entry.label}
              </button>
            );
          })}
        </div>
        <label className="relative w-full lg:w-80">
          <span className="sr-only">Search the archive</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the archive"
            className="min-h-12 w-full border border-white/20 bg-white/5 px-4 font-mono text-xs uppercase tracking-[0.16em] text-[#f4efe5] outline-none transition-colors placeholder:text-[#847b70] focus:border-[#b9ff3b]"
          />
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-px overflow-hidden border border-white/15 bg-white/15">
          {filtered.map(([title, type, year, href]) => (
            <Link
              key={title}
              href={href}
              className="grid gap-4 bg-[#090909] p-5 transition-colors duration-300 hover:bg-[#b9ff3b] hover:text-black sm:grid-cols-[1fr_220px_120px]"
            >
              <span className="text-2xl font-black uppercase">{title}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] opacity-75">{type}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] opacity-75 sm:text-right">{year}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-10 max-w-xl text-xl leading-8 text-[#cfc5b8]">
          No traces match{normalizedQuery ? ` “${query}”` : " that filter"} yet — try another search or filter.
        </p>
      )}

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#81786d]">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
      </p>
    </section>
  );
}
