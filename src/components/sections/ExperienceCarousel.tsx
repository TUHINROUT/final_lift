"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { experienceTestimonials } from "@/data/site";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % experienceTestimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + experienceTestimonials.length) % experienceTestimonials.length);
  };

  const currentTestimonial = experienceTestimonials[activeIndex] || experienceTestimonials[0];

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20">
      <SectionLabel number="06" label="Experience True Luxury" />
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-bold text-text tracking-tight mt-3 mb-10">
        Luxury That <span className="text-gold italic font-normal">Moves With You</span>
      </h2>

      {/* Main Grid Wrapper with Strict Equal Heights */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Stacked Testimonial Cards Container */}
        <div className="lg:col-span-6 flex flex-col justify-between h-auto lg:h-[520px]">
          <div className="flex flex-col justify-between h-full gap-3">
            {experienceTestimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={t.name}
                  onClick={() => setActiveIndex(idx)}
                  className={`group bg-surface backdrop-blur-xl border rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer relative overflow-hidden shadow-xl flex flex-col justify-center ${
                    isActive ? "border-gold/80 shadow-gold/10 scale-[1.01]" : "border-border/80 hover:border-gold/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* Top Gold Illumination Line on Active */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />

                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                      <Quote className="w-4 h-4" />
                    </div>
                    
                    <div className="flex-1">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-text-muted font-light leading-snug">
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-white/10">
                        <div>
                          <p className="font-serif font-bold text-text text-xs tracking-wide">{t.name}</p>
                          <p className="text-[11px] text-gold/80">{t.location}</p>
                        </div>
                        <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-semibold ${isActive ? "bg-gold text-white" : "bg-bg-alt text-text-muted"}`}>
                          0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Toolbar */}
          <div className="flex items-center justify-between px-1 pt-3">
            <div className="flex gap-1.5">
              {experienceTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex ? "w-8 bg-gold" : "w-3 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:border-gold hover:text-gold transition-all shadow-md"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:border-gold hover:text-gold transition-all shadow-md"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Video Showcase Frame (Strictly Matched to Left Height) */}
        <div className="lg:col-span-6 rounded-3xl bg-surface border border-border/80 overflow-hidden relative shadow-2xl group flex flex-col justify-end h-[500px] lg:h-[520px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          >
            <source src="https://www.pexels.com/download/video/32947774/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Cinematic Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent pointer-events-none" />

          {/* Floating Luxury Caption Overlay */}
          <div className="relative z-10 p-8 pointer-events-none mt-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark/70 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase mb-2">
              Client Showcase
            </div>
            <p className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
              {currentTestimonial.name}&apos;s Estate
            </p>
            <p className="text-xs text-white/70 font-light mt-1">
              Featuring seamless architectural integration in {currentTestimonial.location}.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}