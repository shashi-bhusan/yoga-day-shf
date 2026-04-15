"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { ChevronDown } from "lucide-react";
import {
  GALLERY_YEARS,
  type GalleryItem,
  type GalleryYear,
} from "@/lib/gallery";
import { GalleryMasonry } from "@/components/gallery/gallery-masonry";
import { ScotlandSiteHeader } from "@/components/scotland/scotland-site-header";

type Props = {
  imagesByYear: Record<GalleryYear, GalleryItem[]>;
};

function yearFromParam(value: string | null): GalleryYear | null {
  if (value === "2024" || value === "2025") return value;
  return null;
}

export function GalleryPageClient({ imagesByYear }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const year =
    yearFromParam(searchParams.get("year")) ?? "2025";

  const onYearChange = useCallback(
    (next: GalleryYear) => {
      router.replace(`/gallery?year=${next}`, { scroll: false });
    },
    [router],
  );

  const activeItems = imagesByYear[year] ?? [];

  return (
    <>
      <ScotlandSiteHeader linkHashesToHome />
      <div className="min-h-screen min-w-0 overflow-x-hidden bg-background pt-24 text-foreground">
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-10">
          <div>
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--muted-foreground)" }}
            >
              Sneak peek into
            </p>
            <div
              className="mb-3 h-px w-12 rounded-full"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <h1
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "var(--primary)" }}
            >
              Our Gallery
            </h1>
          </div>
          <div className="relative shrink-0 self-start sm:self-center">
            <select
              id="gallery-year"
              aria-label="Gallery year"
              value={year}
              onChange={(e) => onYearChange(e.target.value as GalleryYear)}
              className="cursor-pointer appearance-none rounded-full border-2 bg-background py-2.5 pr-11 pl-5 text-sm font-semibold shadow-sm transition-colors hover:border-primary/40"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              {GALLERY_YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 opacity-60"
              aria-hidden
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
        <GalleryMasonry items={activeItems} />
        <p className="mt-12 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>
          <Link
            href="/"
            className="font-semibold underline underline-offset-4 transition-colors hover:opacity-80"
            style={{ color: "var(--primary)" }}
          >
            ← Back to Scotland&apos;s International Yoga Day
          </Link>
        </p>
      </main>
      </div>
    </>
  );
}
