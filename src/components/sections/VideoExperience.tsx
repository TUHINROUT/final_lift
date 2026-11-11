import SectionLabel from "@/components/ui/SectionLabel";
import { Play } from "lucide-react";

export default function VideoExperience() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <SectionLabel number="14" label="Video Experience" />
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-text tracking-tight mb-8">
        Life Changing <span className="text-gold italic font-normal">Experiences</span>
      </h2>

      <div className="relative rounded-2xl bg-surface border border-border aspect-video overflow-hidden shadow-2xl group flex items-center justify-center">
        <img
          src="/images/factory.jpg"
          alt="EVIO Elevator manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-dark/40 pointer-events-none" />

        {/* Play Button */}
        <button
          aria-label="Play video"
          className="relative w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center text-xl shadow-xl shadow-gold/30 hover:scale-110 transition-transform duration-300 z-10"
        >
          <Play className="w-6 h-6 fill-white ml-0.5" />
        </button>
      </div>
    </section>
  );
}