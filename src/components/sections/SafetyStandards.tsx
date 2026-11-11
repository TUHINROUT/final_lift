import SectionLabel from "@/components/ui/SectionLabel";
import { safetyFeatures, certifications } from "@/data/site";
import { ShieldCheck, Check, Sparkles } from "lucide-react";

export default function SafetyStandards() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading, Safety Features List & Certification Badges */}
        <div className="lg:col-span-6">
          <SectionLabel number="12" label="Safety Standards" />
          
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-bold text-text tracking-tight mt-3 mb-6 leading-tight">
            Your Safety, <br />
            <span className="text-gold italic font-normal">Our Priority</span>
          </h2>

          <div className="space-y-3.5 mb-8">
            {safetyFeatures.map((f, index) => (
              <div
                key={f}
                className="group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-surface backdrop-blur-xl border border-border/80 hover:border-gold/50 transition-all duration-300 shadow-lg"
              >
                <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                
                <span className="font-serif text-sm sm:text-base text-text group-hover:text-gold transition-colors duration-300 tracking-wide">
                  {f}
                </span>

                <span className="ml-auto text-[11px] text-text-muted font-serif font-semibold tracking-widest">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Certifications Badges Showcase */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group relative px-5 py-3 rounded-2xl bg-surface backdrop-blur-xl border border-border/80 hover:border-gold/60 flex items-center gap-3 transition-all duration-300 shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xs font-serif font-bold shrink-0">
                  ✓
                </div>
                <div>
                  <p className="font-serif font-bold text-text text-xs tracking-wider">{cert.name}</p>
                  <p className="text-[10px] text-text-muted font-light mt-0.5">Certified Standard</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Cinematic Video / Luxury Architectural Showcase Frame */}
        <div className="lg:col-span-6 rounded-3xl bg-surface border border-border/80 overflow-hidden relative aspect-[4/3] lg:aspect-[4/5] shadow-2xl group">
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
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent pointer-events-none" />

          {/* Floating Badge Overlay */}
          <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark/70 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Internationally Tested
            </div>
            <p className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
              Absolute Compliance & Safety
            </p>
            <p className="text-xs text-white/70 font-light mt-1">
              Equipped with automatic rescue devices, override protection, and multi-layer structural security.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}