import SectionLabel from "@/components/ui/SectionLabel";
import { customerReviews } from "@/data/site";
import { Quote, Star } from "lucide-react";

export default function CustomerReviews() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <SectionLabel number="15" label="Testimonials" />
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-text tracking-tight mb-10">
        What Our <span className="text-gold italic font-normal">Customers Say</span>
      </h2>

      <div className="grid sm:grid-cols-3 gap-5">
        {customerReviews.map((r) => (
          <div
            key={r.name}
            className="group relative bg-surface backdrop-blur-xl border border-border/80 rounded-2xl p-6 transition-all duration-300 hover:border-gold/50 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Top Gold Illumination Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Quote className="w-3.5 h-3.5" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-text-muted font-light leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-serif font-bold text-xs shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-serif font-bold text-text tracking-wide group-hover:text-gold transition-colors duration-300">
                  {r.name}
                </p>
                <p className="text-xs text-gold/80 font-light">{r.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}