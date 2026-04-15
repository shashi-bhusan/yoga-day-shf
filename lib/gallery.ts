import manifest from "@/data/gallery-manifest.json";

export type GalleryYear = "2024" | "2025";

export const GALLERY_YEARS: GalleryYear[] = ["2025", "2024"];

/** One gallery image with intrinsic pixel size (for column packing). */
export type GalleryItem = {
  url: string;
  width: number;
  height: number;
};

type ManifestEntry =
  | string
  | {
      file: string;
      width: number;
      height: number;
    };

type ManifestShape = Record<GalleryYear, ManifestEntry[]>;

const m = manifest as ManifestShape;

function normalizeEntry(year: GalleryYear, raw: ManifestEntry): GalleryItem | null {
  if (typeof raw === "string") {
    return {
      url: `/images/gallery/${year}/${encodeURIComponent(raw)}`,
      width: 4,
      height: 3,
    };
  }
  if (
    raw &&
    typeof raw === "object" &&
    "file" in raw &&
    typeof (raw as { file: string }).file === "string"
  ) {
    const o = raw as { file: string; width?: number; height?: number };
    const w = typeof o.width === "number" && o.width > 0 ? o.width : 4;
    const h = typeof o.height === "number" && o.height > 0 ? o.height : 3;
    return {
      url: `/images/gallery/${year}/${encodeURIComponent(o.file)}`,
      width: w,
      height: h,
    };
  }
  return null;
}

export function itemsForGalleryYear(year: GalleryYear): GalleryItem[] {
  const list = m[year];
  if (!Array.isArray(list)) return [];
  return list
    .map((e) => normalizeEntry(year, e))
    .filter((x): x is GalleryItem => x != null);
}

export function galleryItemsByYear(): Record<GalleryYear, GalleryItem[]> {
  return {
    "2024": itemsForGalleryYear("2024"),
    "2025": itemsForGalleryYear("2025"),
  };
}
