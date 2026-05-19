"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { InstructorImage } from "@/lib/instructor-images";

type Props = {
  slides: InstructorImage[];
};

export function FeaturedInstructorsCarousel({ slides }: Props) {
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
  }, [slides.length]);

  if (!slides.length) return null;

  const showControls = slides.length > 1;

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
            <div
              className="overflow-hidden rounded-2xl border bg-muted shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                priority={index === 0}
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 18rem"
                className="block h-auto max-h-[min(70vh,32rem)] w-full object-cover object-top"
              />
            </div>
            {slide.label ? (
              <figcaption
                className="mt-2 text-center text-sm font-medium"
                style={{ color: "var(--muted-foreground)" }}
              >
                {slide.label}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {showControls ? (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label="Previous instructor"
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
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View ${slide.label}`}
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
            aria-label="Next instructor"
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
      ) : null}
    </div>
  );
}
