import SectionLabel from "@/components/ui/SectionLabel";
import { technologyFeatures } from "@/data/site";
import { Check, Sparkles } from "lucide-react";

export default function Technology() {
  return (
    <section id="technology" className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-16 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Heading & Compact Feature List */}
        <div className="lg:col-span-6">
          <SectionLabel number="09" label="Cutting Edge Technology" />
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight mt-2 mb-6 leading-tight">
            Technology That <br />
            <span className="text-gold italic font-normal">Sets Us Apart</span>
          </h2>

          <div className="space-y-3">
            {technologyFeatures.map((f, index) => (
              <div
                key={f}
                className="group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-surface backdrop-blur-xl border border-border/80 hover:border-gold/50 transition-all duration-300 shadow-lg"
              >
                <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                
                <span className="font-serif text-sm text-text group-hover:text-gold transition-colors duration-300 tracking-wide">
                  {f}
                </span>

                <span className="ml-auto text-[11px] text-text-muted font-serif font-semibold tracking-widest">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Compact Cinematic Video / 3D Model Showcase Frame */}
        <div className="lg:col-span-6 rounded-3xl bg-surface border border-border/80 overflow-hidden relative aspect-[16/10] lg:aspect-[4/3] shadow-2xl group">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          >
            <source src="https://www.pexels.com/download/video/27966509/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Cinematic Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent pointer-events-none" />

          {/* Floating Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-dark/70 backdrop-blur-md border border-gold/40 text-gold text-[10px] font-semibold tracking-widest uppercase mb-1.5">
              <Sparkles className="w-3 h-3" /> European Engineering
            </div>
            <p className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
              Pneumatic Vacuum Innovation
            </p>
            <p className="text-xs text-white/70 font-light mt-0.5">
              Zero pit, self-supporting structure designed for absolute architectural elegance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}