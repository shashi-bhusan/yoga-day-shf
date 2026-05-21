"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { InstructorImage } from "@/lib/instructor-images";

type Props = {
  slides: InstructorImage[];
  /** Side-by-side panel: single portrait column (left). Default: horizontal swipe row. */
  layout?: "carousel" | "split";
};

function InstructorPhoto({
  slide,
  priority,
  sizes,
}: {
  slide: InstructorImage;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border bg-muted shadow-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain object-center p-1 sm:p-2"
      />
    </div>
  );
}

function InstructorCaption({ slide }: { slide: InstructorImage }) {
  return (
    <figcaption className="mt-3 space-y-1.5 text-center">
      <p
        className="text-base font-semibold"
        style={{ color: "var(--foreground)" }}
      >
        {slide.name}
      </p>
      {slide.instagram ? (
        <a
          href={slide.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
          style={{ color: "var(--primary)" }}
        >
          Follow me on Instagram
        </a>
      ) : null}
      {slide.social ? (
        <a
          href={slide.social}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
          style={{ color: "var(--primary)" }}
        >
          {slide.socialLabel ?? "Social Media"}
        </a>
      ) : null}
    </figcaption>
  );
}

function SplitControls({
  count,
  activeIndex,
  onSelect,
  onPrev,
  onNext,
  instructorName,
}: {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  instructorName?: string;
}) {
  if (count <= 1) return null;
  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onPrev}
        disabled={activeIndex === 0}
        aria-label={`Previous instructor${instructorName ? ` (before ${instructorName})` : ""}`}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        style={{ borderColor: "var(--border)" }}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div
        className="flex items-center gap-2"
        role="tablist"
        aria-label="Instructor photos"
      >
        {Array.from({ length: count }, (_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`View instructor ${index + 1}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onSelect(index)}
              className="h-2 rounded-full transition-all"
              style={{
                width: isActive ? "1.75rem" : "0.5rem",
                backgroundColor: isActive ? "var(--primary)" : "var(--border)",
              }}
            />
          );
        })}
      </div>
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onNext}
        disabled={activeIndex === count - 1}
        aria-label={`Next instructor${instructorName ? ` (after ${instructorName})` : ""}`}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        style={{ borderColor: "var(--border)" }}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

function InstructorBio({ slide }: { slide: InstructorImage }) {
  if (!slide.bio.length) return null;
  return (
    <div
      className="h-full space-y-4 rounded-xl border p-5 text-justify hyphens-auto sm:p-6 lg:min-h-full"
      style={{
        fontSize: "1.05rem",
        lineHeight: 1.75,
        color: "var(--muted-foreground)",
        borderColor: "var(--border)",
        backgroundColor: "var(--muted)",
      }}
    >
      {slide.greeting ? (
        <p
          className="text-left font-semibold"
          style={{ fontSize: "1.15rem", color: "var(--foreground)" }}
        >
          {slide.greeting}
        </p>
      ) : null}
      {slide.bio.map((paragraph, i) => (
        <p key={i} className="text-pretty">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function SplitInstructorPanel({ slides }: { slides: InstructorImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const slide = slides[activeIndex];

  const scrollPanelIntoView = useCallback(() => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      setActiveIndex(index);
      requestAnimationFrame(() => scrollPanelIntoView());
    },
    [scrollPanelIntoView],
  );

  if (!slide) return null;

  return (
    <div className="w-full">
      <div
        ref={panelRef}
        className="scroll-mt-28 grid items-start gap-8 lg:grid-cols-[minmax(15rem,20rem)_1fr] lg:gap-10"
      >
        <figure className="mx-auto w-full max-w-[20rem] lg:mx-0">
          <InstructorPhoto
            slide={slide}
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 85vw, 20rem"
          />
          <InstructorCaption slide={slide} />
        </figure>
        <InstructorBio slide={slide} />
      </div>
      <SplitControls
        count={slides.length}
        activeIndex={activeIndex}
        onSelect={goToIndex}
        onPrev={() => goToIndex(Math.max(0, activeIndex - 1))}
        onNext={() => goToIndex(Math.min(slides.length - 1, activeIndex + 1))}
        instructorName={slide.name}
      />
    </div>
  );
}

export function FeaturedInstructorsCarousel({
  slides,
  layout = "carousel",
}: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll<HTMLElement>("[data-slide]");
    const target = items[index];
    if (!target) return;
    track.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  }, []);

  const goPrev = useCallback(() => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  }, [activeIndex, scrollToIndex]);

  const goNext = useCallback(() => {
    scrollToIndex(Math.min(slides.length - 1, activeIndex + 1));
  }, [activeIndex, scrollToIndex, slides.length]);

  useEffect(() => {
    if (layout === "split") return;
    const track = trackRef.current;
    if (!track) return;

    const handler = () => {
      const items = Array.from(
        track.querySelectorAll<HTMLElement>("[data-slide]"),
      );
      if (!items.length) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.clientWidth / 2;
        const distance = Math.abs(itemCenter - center);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      setActiveIndex(nearestIndex);
    };

    handler();
    track.addEventListener("scroll", handler, { passive: true });
    return () => track.removeEventListener("scroll", handler);
  }, [layout, slides.length]);

  if (!slides.length) return null;

  if (layout === "split") {
    return <SplitInstructorPanel slides={slides} />;
  }

  return (
    <div className="relative mt-8">
      <div
        ref={trackRef}
        role="region"
        aria-label="Featured instructors — swipe between photos"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6"
        style={{
          scrollPaddingInline: "0.5rem",
          scrollbarWidth: "thin",
        }}
      >
        {slides.map((slide, index) => (
          <figure
            key={slide.src}
            data-slide
            className="snap-center shrink-0 grow-0"
            style={{ flexBasis: "min(18rem, 78%)" }}
          >
            <InstructorPhoto
              slide={slide}
              priority={index === 0}
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 18rem"
            />
            <InstructorCaption slide={slide} />
          </figure>
        ))}
      </div>

      <SplitControls
        count={slides.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}
