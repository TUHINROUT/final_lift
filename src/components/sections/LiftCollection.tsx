import SectionLabel from "@/components/ui/SectionLabel";
import { liftCategories } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function LiftCollection() {
  return (
    <section id="products" className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20">
      
      {/* Section Header */}
      <div className="mb-10">
        <SectionLabel number="04" label="Our Elevator Collection" />
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-bold text-text tracking-tight mt-3">
          Luxury Elevators <span className="text-gold italic font-normal">For Every Space</span>
        </h2>
      </div>

      {/* Grid of Elevator Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {liftCategories.map((cat) => (
          <div
            key={cat.name}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/80 bg-surface shadow-2xl cursor-pointer transition-all duration-500 hover:border-gold/60 hover:-translate-y-2 hover:shadow-gold/10"
          >
            {/* Background Image with Smooth Zoom on Hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              {/* Cinematic Dark Gradient Overlays for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div>
                <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gold-light transition-colors duration-300 drop-shadow-md">
                  {cat.name}
                </h3>
                <p className="text-xs text-white/70 font-light mt-1 tracking-wide">
                  {cat.tagline}
                </p>

                {/* View Details Action Link */}
                <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-wider mt-4 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Top Minimalist Gold Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
          </div>
        ))}
      </div>
    </section>
  );
}