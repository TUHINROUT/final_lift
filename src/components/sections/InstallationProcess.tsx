import SectionLabel from "@/components/ui/SectionLabel";
import { installationProcess } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function InstallationProcess() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <SectionLabel number="10" label="Installation Process" />
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-text tracking-tight mb-10 max-w-lg">
        Seamless From <span className="text-gold italic font-normal">Start to Finish</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {installationProcess.map((step) => (
          <div
            key={step.step}
            className="group relative bg-surface backdrop-blur-xl border border-border/80 rounded-2xl p-5 text-center flex flex-col items-center justify-between transition-all duration-500 hover:border-gold/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/10 overflow-hidden"
          >
            {/* Top Illumination Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="w-12 h-12 mx-auto rounded-xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center mb-4 font-serif text-sm font-bold group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-inner">
                {step.step}
              </div>
              <p className="font-serif text-sm font-bold text-text tracking-wide group-hover:text-gold transition-colors duration-300">
                {step.title}
              </p>
              <p className="text-xs text-text-muted font-light mt-1.5 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="w-4 h-[1px] bg-border mt-4 group-hover:w-full group-hover:bg-gold/40 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}