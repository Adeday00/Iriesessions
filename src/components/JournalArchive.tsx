"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ArchiveRow = readonly [string, string, string, string];

export function JournalArchive({ items }: { items: readonly ArchiveRow[] }) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      items.filter(([title, type, year]) => {
        if (normalizedQuery === "") {
          return true;
        }
        return `${title} ${type} ${year}`.toLowerCase().includes(normalizedQuery);
      }),
    [items, normalizedQuery],
  );

  return (
    <section className="px-5 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-3 border-b border-white/15 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#b9ff3b]">Archive index</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#9d9488]">
            Search by title, format, year, or city.
          </p>
        </div>
        <label className="relative w-full lg:w-[28rem]">
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
              className="archive-row grid gap-4 bg-[#090909] p-5 hover:bg-[#b9ff3b] hover:text-black sm:grid-cols-[1fr_220px_120px]"
            >
              <span className="text-2xl font-black uppercase">{title}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] opacity-75">{type}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] opacity-75 sm:text-right">{year}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-10 max-w-xl text-xl leading-8 text-[#cfc5b8]">
          No traces match{normalizedQuery ? ` “${query}”` : ""} yet.
        </p>
      )}

      <p aria-live="polite" aria-atomic="true" className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#81786d]">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
      </p>
    </section>
  );
}
