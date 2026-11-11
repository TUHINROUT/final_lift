"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { projectCategories, projects } from "@/data/site";
import { ArrowRight } from "lucide-react";

// Curated high-resolution online Unsplash architectural images for projects
const projectImages = [
  "/images/lift-r7066.jpg",
  "/images/lift-r6061.jpg",
  "/images/lift-r6053.jpg",
  "/images/lift-r6051.jpg",
  "/images/factory-floor1.jpg",
  "/images/factory-floor2.jpg",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0] || "All");

  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <SectionLabel number="14" label="Our Projects" />
      
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight">
          Projects We&apos;re <span className="text-gold italic font-normal">Proud Of</span>
        </h2>
        <Button variant="outline" className="text-xs font-semibold tracking-wider uppercase border-border/80 hover:border-gold hover:text-gold transition-all self-start sm:self-auto">
          View All Projects
        </Button>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10 text-xs">
        {projectCategories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full border transition-all duration-300 font-medium cursor-pointer ${
                isActive
                  ? "bg-gold text-white border-gold shadow-lg shadow-gold/20"
                  : "bg-surface border-border/80 text-text-muted hover:border-gold/50 hover:text-text"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p, index) => {
          const bgImage = projectImages[index % projectImages.length];

          return (
            <div
              key={p.name}
              className="group relative rounded-3xl bg-surface border border-border/80 aspect-[3/4] overflow-hidden shadow-2xl flex flex-col justify-end p-6 cursor-pointer hover:border-gold/60 transition-all duration-500"
            >
              {/* Top Illumination Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Background Image with Zoom */}
              <img
                src={bgImage}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent pointer-events-none" />

              {/* Content Overlay */}
              <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                <p className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-1">
                  {p.category}
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  {p.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore Project</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}