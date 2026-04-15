"use client";

import Image from "next/image";
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { GalleryItem } from "@/lib/gallery";

const GAP_PX = 16;

/** Assign each item to the shortest column so stacks stay tight (no ragged holes). */
function packIntoColumns(
  items: GalleryItem[],
  columnCount: number,
  columnWidthPx: number,
  gapPx: number,
): GalleryItem[][] {
  if (columnCount < 1 || columnWidthPx <= 0) {
    return [items];
  }
  const cols: GalleryItem[][] = Array.from({ length: columnCount }, () => []);
  const heights = Array(columnCount).fill(0);

  for (const it of items) {
    let shortest = 0;
    for (let c = 1; c < columnCount; c++) {
      if (heights[c] < heights[shortest]) shortest = c;
    }
    cols[shortest].push(it);
    const displayH = (it.height / it.width) * columnWidthPx;
    heights[shortest] += displayH + gapPx;
  }
  return cols;
}

function columnCountForWidth(containerWidth: number) {
  if (containerWidth < 640) return 1;
  if (containerWidth < 1024) return 2;
  return 3;
}

export function GalleryMasonry({ items }: { items: GalleryItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ width: 0, cols: 3 });

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const width = el.getBoundingClientRect().width;
    const cols = columnCountForWidth(width);
    setLayout((prev) =>
      Math.abs(prev.width - width) < 2 && prev.cols === cols
        ? prev
        : { width, cols },
    );
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const packed = useMemo(() => {
    const w = layout.width;
    const c = layout.cols;
    if (w <= 0 || items.length === 0) {
      return Array.from({ length: c }, () => [] as GalleryItem[]);
    }
    const inner = w - GAP_PX * Math.max(0, c - 1);
    const colW = inner / c;
    return packIntoColumns(items, c, colW, GAP_PX);
  }, [items, layout]);

  if (items.length === 0) {
    return (
      <div
        className="rounded-2xl border px-6 py-16 text-center"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--muted)",
          color: "var(--muted-foreground)",
        }}
      >
        <p className="mx-auto max-w-lg text-base leading-relaxed">
          No photos are listed for this year yet. Add images under{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-sm text-foreground">
            ../scotland-yoga-day/2024
          </code>{" "}
          or{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-sm text-foreground">
            …/2025
          </code>
          (or{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-sm text-foreground">
            gallery-source/…
          </code>
          ), then run{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-sm text-foreground">
            npm run gallery:optimize
          </code>
          .
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="flex w-full items-start"
        style={{ gap: GAP_PX }}
      >
        {packed.map((column, ci) => (
          <div
            key={ci}
            className="flex min-w-0 flex-1 flex-col"
            style={{ gap: GAP_PX }}
          >
            {column.map((it, ii) => (
              <figure
                key={`${it.url}-${ci}-${ii}`}
                className="overflow-hidden rounded-2xl border shadow-sm transition-[box-shadow] hover:shadow-md"
                style={{ borderColor: "var(--border)" }}
              >
                <Image
                  src={it.url}
                  alt={`Gallery photo ${ci + 1}-${ii + 1}`}
                  width={it.width}
                  height={it.height}
                  className="h-auto w-full bg-muted object-cover align-middle"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
