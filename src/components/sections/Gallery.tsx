"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryImages } from "@/data/site";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const total = galleryImages.length;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const current = active !== null ? galleryImages[active] : null;

  return (
    <section id="gallery" className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <SectionLabel number="11" label="Gallery" />
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight">
          A Glimpse of <span className="text-gold italic font-normal">Our Work</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
        {galleryImages.map((img, idx) => (
          <button
            type="button"
            key={img.src}
            onClick={() => setActive(idx)}
            aria-label={`Open image: ${img.title}`}
            className="group relative aspect-[3/4] rounded-2xl bg-surface border border-border/80 overflow-hidden shadow-xl cursor-pointer hover:border-gold/60 transition-all duration-500 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
              <span className="text-[10px] sm:text-xs font-serif text-gold-light tracking-widest uppercase font-medium flex items-center gap-1.5">
                <span className="line-clamp-2">View Image</span>
                <ArrowRight className="w-3 h-3 shrink-0" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
          onClick={close}
        >
          <div className="flex items-center justify-between gap-4 px-4 sm:px-8 py-3 sm:py-4">
            <p className="text-white/90 text-xs sm:text-sm font-serif truncate">
              {current.title}
              <span className="text-white/50 ml-2">
                {(active ?? 0) + 1} / {total}
              </span>
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close image"
              className="w-11 h-11 shrink-0 rounded-full bg-white/10 hover:bg-gold border border-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16 pb-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-5 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold border border-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-5 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold border border-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
