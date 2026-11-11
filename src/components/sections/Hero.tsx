import Button from "@/components/ui/Button";
import { heroStats } from "@/data/site";
import { Play, Sparkles } from "lucide-react";

const heroModels = [
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

const checklist = ["Machine Room-Less Option", "PMSG Gearless Motor", "Quick Installation"];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-bg">
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 pt-10 lg:pt-14 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl leading-[1.1] font-serif font-bold tracking-tight text-text">
              Elevate <br />
              Your <span className="text-gold italic font-normal">Lifestyle</span>
            </h1>

            <p className="text-text-muted mt-4 max-w-md text-sm sm:text-base leading-relaxed font-light">
              Since 2005, EVIO Elevator has engineered reliable, eco-friendly vertical transportation with cutting-edge PMSG gearless technology and uncompromised safety.
            </p>

            <div className="flex flex-wrap gap-4 mt-5 text-xs font-medium text-text-muted">
              {checklist.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="text-gold font-bold">✓</span> {item}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-7">
              <Button variant="gold" className="px-6 py-3 text-xs font-semibold shadow-xl shadow-gold/20">
                Explore Lifts
              </Button>
              <Button variant="outline" className="px-6 py-3 text-xs flex items-center gap-2">
                <Play className="w-3.5 h-3.5 fill-current" /> Watch Video
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-4 gap-4 mt-9 max-w-lg bg-gradient-to-r from-gold to-gold-light rounded-2xl px-6 py-5 shadow-xl shadow-gold/20">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-white text-xl sm:text-2xl font-bold tracking-tight font-serif">{stat.value}</p>
                  <p className="text-[10px] text-white/75 mt-0.5 uppercase tracking-wider font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo + Floating Lift Models Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/3] lg:aspect-[5/4] relative">
              <img
                src="/images/lift-r7066.jpg"
                alt="EVIO home elevator installation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Pricing Card */}
            <div className="hidden md:block absolute -bottom-10 -left-8 lg:-left-16 w-[300px] bg-surface border border-border rounded-2xl shadow-2xl p-5">
              <div className="inline-flex items-center gap-1.5 text-gold text-[10px] font-semibold tracking-widest uppercase mb-1">
                <Sparkles className="w-3 h-3" /> Premium Lift Models
              </div>
              <p className="font-serif text-base font-bold text-text mb-3">Choose the Perfect Lift</p>

              <div className="grid grid-cols-3 gap-2">
                {heroModels.map((model) => (
                  <div
                    key={model.name}
                    className={`rounded-xl overflow-hidden border ${
                      model.featured ? "border-gold ring-1 ring-gold/40" : "border-border"
                    }`}
                  >
                    <div className="aspect-square relative">
                      <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-1.5 text-center">
                      <p className="text-[9px] font-semibold text-text truncate">{model.name}</p>
                      <p className="text-[8px] text-gold font-bold">{model.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="gold" className="w-full mt-3 text-[11px] py-2.5">
                View All Models
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
