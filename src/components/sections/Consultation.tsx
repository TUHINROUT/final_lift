import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { Sparkles, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Consultation() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center bg-surface backdrop-blur-xl border border-border/80 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        
        {/* Top Illumination Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-100 z-20" />

        {/* Left Column: Form Section */}
        <div className="lg:col-span-7">
          <SectionLabel number="18" label="Free Consultation" />
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight mt-2 mb-3">
            Get a Free <span className="text-gold italic font-normal">Consultation</span>
          </h2>
          
          <p className="text-text-muted text-sm font-light mb-8 max-w-md">
            Our experts are here to help you choose the perfect lift for your home. Fill in your details below for a prompt callback.
          </p>

          <form className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-surface border border-border/80 rounded-full pl-11 pr-5 py-3.5 text-sm text-text placeholder:text-text-muted outline-none focus:border-gold transition-colors"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-surface border border-border/80 rounded-full pl-11 pr-5 py-3.5 text-sm text-text placeholder:text-text-muted outline-none focus:border-gold transition-colors"
              />
            </div>

            <div className="relative sm:col-span-2">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60 pointer-events-none" />
              <select className="w-full sm:col-span-2 bg-surface border border-border/80 rounded-full pl-11 pr-5 py-3.5 text-sm outline-none focus:border-gold text-text-muted appearance-none transition-colors cursor-pointer">
                <option className="bg-surface text-text-muted">Select City</option>
                <option className="bg-surface text-text">Bhubaneswar</option>
                <option className="bg-surface text-text">Vishakhapatnam</option>
                <option className="bg-surface text-text">Durgapur</option>
                <option className="bg-surface text-text">Kolkata</option>
                <option className="bg-surface text-text">Ahmedabad</option>
                <option className="bg-surface text-text">Nagpur</option>
                <option className="bg-surface text-text">Kochi</option>
                <option className="bg-surface text-text">Rajasthan</option>
              </select>
            </div>

            <div className="sm:col-span-2 mt-2">
              <Button variant="gold" type="submit" className="w-full py-4 rounded-full text-xs font-semibold tracking-widest uppercase shadow-xl shadow-gold/20 flex items-center justify-center gap-2 group">
                <span>Request a Callback</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </div>

        {/* Right Column: Premium Image Showcase Frame */}
        <div className="lg:col-span-5 rounded-2xl bg-surface border border-border/80 aspect-video lg:aspect-[4/3] overflow-hidden relative shadow-2xl group">
          <img
            src="/images/lift-r6061.jpg"
            alt="EVIO MRL elevator consultation"
            className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none" />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark/70 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase mb-1.5">
              <Sparkles className="w-3 h-3" /> Expert Guidance
            </div>
            <p className="font-serif text-lg font-bold text-text tracking-wide">
              Schedule Your Site Inspection
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}