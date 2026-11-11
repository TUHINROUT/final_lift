"use client";

import { trustedBrands } from "@/data/site";

const brandImages: Record<string, string> = {
  "AIDC": "/images/logo-amc.jpg",
  "Ahmedabad Municipal Corporation": "/images/logo-amc.jpg",
  "MSME / Govt. of India": "/images/logo-udyam.jpg",
};

// Official vector emblem SVGs for real estate & corporate partners
const brandLogos: Record<string, React.ReactNode> = {
  DLF: (
    <svg className="w-6 h-6 text-gold group-hover/brand:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
    </svg>
  ),
  Godrej: (
    <svg className="w-6 h-6 text-gold group-hover/brand:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Prestige: (
    <svg className="w-6 h-6 text-gold group-hover/brand:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  SOBHA: (
    <svg className="w-6 h-6 text-gold group-hover/brand:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  BRIGADE: (
    <svg className="w-6 h-6 text-gold group-hover/brand:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  OMAXE: (
    <svg className="w-6 h-6 text-gold group-hover/brand:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

export default function TrustedBrands() {
  const marqueeItems = [...trustedBrands, ...trustedBrands, ...trustedBrands];

  return (
    <section className="border-y border-border bg-bg-alt overflow-hidden py-10 relative">
      
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-8 text-center">
        <p className="eyebrow tracking-[0.25em] text-gold/80 mb-1.5">Recognitions & Affiliations</p>
        <h2 className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-text">
          Certified &amp; <span className="text-gold italic font-normal">Recognized By</span>
        </h2>
      </div>

      {/* Marquee Wrapper with Fade Edges */}
      <div className="relative w-full overflow-hidden flex items-center group">
        
        {/* Left & Right Smooth Gradient Fade Masks */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-bg-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-bg-alt to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track with Pause on Hover Class */}
        <div className="flex shrink-0 animate-marquee gap-6 items-center pause-animation">
          {marqueeItems.map((brand, index) => {
            const logoImg = brandImages[brand];
            const logoSvg = brandLogos[brand] || (
              <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
            );

            return (
              <div
                key={`${brand}-${index}`}
                className="flex items-center gap-3 px-6 py-3.5 bg-surface/90 backdrop-blur-md rounded-xl border border-border shadow-md hover:border-gold/60 hover:bg-surface transition-all duration-300 group/brand min-w-[170px] cursor-pointer"
              >
                {/* Official Logo Emblem */}
                <div className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full overflow-hidden bg-white ring-1 ring-border">
                  {logoImg ? (
                    <img src={logoImg} alt={brand} className="w-full h-full object-cover" />
                  ) : (
                    logoSvg
                  )}
                </div>

                {/* Corporate Typography */}
                <span className="font-serif text-base font-bold tracking-widest text-text group-hover/brand:text-gold transition-colors duration-300 select-none">
                  {brand}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}