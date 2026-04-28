import manifest from "@/data/event-highlights-manifest.json";
import type { GalleryItem } from "@/lib/gallery";

type ManifestEntry = { file: string; width: number; height: number };

export function eventHighlightsItems(): GalleryItem[] {
  const list = manifest as ManifestEntry[];
  if (!Array.isArray(list)) return [];
  return list.map((e) => ({
    url: `/images/event-highlights/${encodeURIComponent(e.file)}`,
    width: e.width,
    height: e.height,
  }));
}
