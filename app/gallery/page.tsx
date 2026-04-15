import type { Metadata } from "next";
import { Suspense } from "react";
import { GalleryPageClient } from "@/components/gallery/gallery-page-client";
import { galleryItemsByYear } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Our Gallery | Scotland's International Yoga Day",
  description:
    "Photo gallery from Scotland's International Yoga Day — browse images by year.",
};

function GalleryFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-background text-sm"
      style={{ color: "var(--muted-foreground)" }}
    >
      Loading gallery…
    </div>
  );
}

export default function GalleryPage() {
  const imagesByYear = galleryItemsByYear();

  return (
    <Suspense fallback={<GalleryFallback />}>
      <GalleryPageClient imagesByYear={imagesByYear} />
    </Suspense>
  );
}
