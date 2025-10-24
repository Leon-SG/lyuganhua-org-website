"use client";
import { useEffect, useMemo, useState } from "react";

type Slide = { src: string; alt?: string; title?: string; subtitle?: string };

export default function Carousel({
  slides,
  autoInterval = 5000,
  ariaLabel = "Image carousel"
}: {
  slides: Slide[];
  autoInterval?: number;
  ariaLabel?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const clamped = (n: number) => (n + count) % count;

  const go = (n: number) => setIndex((i) => clamped(i + n));
  const dots = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);

  useEffect(() => {
    if (count <= 1) return;
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || paused) return;
    const id = setInterval(() => setIndex((i) => clamped(i + 1)), autoInterval);
    return () => clearInterval(id);
  }, [autoInterval, count, paused]);

  return (
    <div className="carousel" aria-label={ariaLabel} role="region" aria-roledescription="carousel">
      <div
        className="carousel-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
          if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        }}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div className="carousel-slide" key={i} aria-hidden={index !== i}>
              {/* Use plain img to avoid remote domain config; images live in /public */}
              <img src={s.src} alt={s.alt || ""} />
            </div>
          ))}
        </div>
        {slides[index] && (slides[index].title || slides[index].subtitle) && (
          <div className="carousel-caption" aria-live="polite">
            <div className="carousel-caption-inner">
              {slides[index].title && <p className="carousel-caption-title">{slides[index].title}</p>}
              {slides[index].subtitle && <p className="carousel-caption-sub">{slides[index].subtitle}</p>}
            </div>
          </div>
        )}
        {count > 1 && (
          <div className="carousel-controls" aria-hidden>
            <button className="carousel-button" onClick={() => go(-1)} aria-label="Previous slide">
              ‹
            </button>
            <button className="carousel-button" onClick={() => go(1)} aria-label="Next slide">
              ›
            </button>
          </div>
        )}
      </div>
      {count > 1 && (
        <div className="carousel-dots" role="tablist" aria-label="Carousel pagination">
          {dots.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={index === d}
              aria-controls={`slide-${d}`}
              className={"carousel-dot" + (index === d ? " active" : "")}
              onClick={() => setIndex(d)}
              aria-label={`Go to slide ${d + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
