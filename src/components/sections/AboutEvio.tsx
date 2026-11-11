import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { aboutStats } from "@/data/site";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutEvio() {
  return (
    <section id="about" className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-24 overflow-hidden">
      
      {/* Background Glow Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionLabel number="05" label="About Evio Elevator" />
      
      {/* Grid container with items-stretch to make columns equal height */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch mt-6">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-surface backdrop-blur-xl border border-border/80 rounded-3xl p-8 shadow-2xl relative group hover:border-gold/50 transition-all duration-500">
          
          {/* Top Gold Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Trusted Since 2005
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text leading-tight">
              Redefining <br />
              <span className="text-gold italic font-normal">Vertical Mobility</span>
            </h2>
            
            <p className="text-text-muted mt-5 text-sm sm:text-base leading-relaxed font-light">
              EVIO Elevators, founded in 2005, is a modern professional elevator enterprise integrating R&D, manufacturing, sales, engineering and service. We are qualified in elevator manufacturing, installation, repair and modernization across India.
            </p>
          </div>

          <div className="pt-8">
            <Button variant="gold" className="px-7 py-3 text-xs font-semibold shadow-xl shadow-gold/20 flex items-center gap-2 group/btn">
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Middle Column: Cinematic Autoplay Video (Matched Height & Proportions) */}
        <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-border/80 relative min-h-[460px] lg:min-h-full shadow-2xl group">
          <img
            src="/images/team.jpg"
            alt="EVIO Elevator team"
            className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <p className="text-xs font-serif text-gold uppercase tracking-widest font-semibold">Our Team</p>
            <p className="text-sm text-white font-light mt-0.5">Engineers, technicians & support staff behind EVIO.</p>
          </div>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 content-between">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="group bg-surface backdrop-blur-xl border border-border/80 rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-xl hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full min-h-[210px]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-gold text-2xl sm:text-3xl font-serif font-bold tracking-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-2 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}