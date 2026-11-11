import SectionLabel from "@/components/ui/SectionLabel";
import { whyChooseUs } from "@/data/site";
import { ShieldCheck, Zap, Sliders, Award, Sparkles, Compass, Cpu, Gem } from "lucide-react";

// Map premium icons for each feature item
const featureIcons: Record<string, React.ReactNode> = {
  "Safety First": <ShieldCheck className="w-5 h-5" />,
  "Zero Pit": <Zap className="w-5 h-5" />,
  "No Machine Room": <Cpu className="w-5 h-5" />,
  "Quick Installation": <Compass className="w-5 h-5" />,
  "Air Driven": <Sparkles className="w-5 h-5" />,
  "Eco Friendly": <Award className="w-5 h-5" />,
  "Customizable": <Sliders className="w-5 h-5" />,
  "Absolute Luxury": <Gem className="w-5 h-5" />,
};

export default function WhyChooseUs() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20">
      <SectionLabel number="03" label="Why Choose Evio Elevator?" />
      
      <div className="grid lg:grid-cols-12 gap-10 items-center mt-6">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text leading-tight max-w-md">
            Why We Are Your <br />
            <span className="text-gold italic font-normal">Perfect Choice</span>
          </h2>
          <p className="text-text-muted mt-4 text-sm sm:text-base leading-relaxed font-light max-w-md">
            World class technology, superior safety and unmatched luxury tailored for your architectural estate.
          </p>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {whyChooseUs.map((item) => {
            const icon = featureIcons[item.title] || <Gem className="w-5 h-5" />;

            return (
              <div
                key={item.title}
                className="group relative bg-surface backdrop-blur-xl border border-border/80 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-500 hover:border-gold/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/10"
              >
                {/* Subtle top illumination border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-inner">
                  {icon}
                </div>

                {/* Title */}
                <p className="text-xs sm:text-sm font-serif font-medium text-text-muted group-hover:text-gold transition-colors duration-300 leading-snug">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}