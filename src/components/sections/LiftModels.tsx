import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { Sparkles, ArrowRight } from "lucide-react";

// Direct model data with verified Unsplash luxury architectural elevator photos
const liftModelsData = [
  {
    name: "R6051 - Automatic",
    price: "4P to 26 Passenger",
    featured: false,
    image: "/images/lift-r6051.jpg",
  },
  {
    name: "R6053 - Hospital",
    price: "13P to 26 Passenger",
    featured: true,
    image: "/images/lift-r6053.jpg",
  },
  {
    name: "R6061 - MRL Auto",
    price: "4P to 26 Passenger",
    featured: false,
    image: "/images/lift-r6061.jpg",
  },
];

export default function LiftModels() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      
      {/* Section Header */}
      <SectionLabel number="08" label="Premium Lift Models" />
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight mb-8">
        Choose the <span className="text-gold italic font-normal">Perfect Lift</span>
      </h2>

      {/* Models Grid */}
      <div className="grid sm:grid-cols-3 gap-6 items-stretch">
        {liftModelsData.map((model) => {
          const isFeatured = model.featured;

          return (
            <div
              key={model.name}
              className={`group relative rounded-2xl border p-5 text-center flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-xl ${
                isFeatured
                  ? "bg-bg-alt border-gold shadow-gold/20 scale-[1.02] sm:-translate-y-1.5"
                  : "bg-surface border-border/80 hover:border-gold/50"
              }`}
            >
              {/* Top Illumination Line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-500 ${isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

              {/* Featured Badge */}
              {isFeatured && (
                <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold text-white text-[9px] font-bold tracking-widest uppercase shadow-md">
                  <Sparkles className="w-2.5 h-2.5" /> Popular
                </div>
              )}

              {/* Compact Image Container with Unsplash Photo */}
              <div className="w-full aspect-[4/3] rounded-xl bg-bg-alt overflow-hidden relative mb-4 shadow-inner">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Model Info & Pricing */}
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-text tracking-wide group-hover:text-gold transition-colors duration-300">
                  {model.name}
                </h3>
                <p className="text-[11px] text-text-muted mt-1 uppercase tracking-wider font-medium">Capacity</p>
                <p className="text-gold font-serif text-lg sm:text-xl font-bold tracking-tight mt-0.5">{model.price}</p>
              </div>

              {/* Action Link */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Configure Model</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Button variant="gold" className="px-8 py-3 text-xs font-semibold tracking-widest uppercase shadow-xl shadow-gold/20 flex items-center gap-2 mx-auto group/btn">
          <span>View All Models</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}