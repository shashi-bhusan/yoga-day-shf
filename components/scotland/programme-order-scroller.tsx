"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const PROGRAMME_IMAGE_WIDTH = 1414;
const PROGRAMME_IMAGE_HEIGHT = 2000;

const slides: Slide[] = [
  {
    src: "/images/sections/Pyramid-1.jpeg",
    alt: "Programme order — The Pyramid at Anderston",
  },
  {
    src: "/images/sections/Lotus.png",
    alt: "Programme order — The Lotus Hall",
  },
  {
    src: "/images/sections/Shanti.png",
    alt: "Programme order — The Shanti Hall",
  },
];

export function ProgrammeOrderScroller() {
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
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="relative min-w-0 max-w-full overflow-hidden">
      <div
        ref={trackRef}
        role="region"
        aria-label="Programme order — swipe between pages"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:thin] sm:gap-6"
        style={{
          scrollPaddingInline: "1rem",
          scrollbarWidth: "thin",
        }}
      >
        {slides.map((slide, index) => (
          <figure
            key={slide.src}
            data-slide
            className="min-w-0 shrink-0 grow-0 snap-center"
            style={{
              flexBasis: "min(28rem, min(88vw, 100%))",
            }}
          >
            <div
              className="overflow-hidden rounded-2xl border bg-muted shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={PROGRAMME_IMAGE_WIDTH}
                height={PROGRAMME_IMAGE_HEIGHT}
                priority={index === 0}
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 28rem"
                className="block h-auto w-full object-contain"
              />
            </div>
            <figcaption
              className="mt-2 text-center text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              Page {index + 1} of {slides.length}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Previous page"
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
          aria-label="Programme order pages"
        >
          {slides.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to page ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: isActive ? "1.75rem" : "0.5rem",
                  backgroundColor: isActive
                    ? "var(--primary)"
                    : "var(--border)",
                }}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex === slides.length - 1}
          aria-label="Next page"
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
    </div>
  );
}
