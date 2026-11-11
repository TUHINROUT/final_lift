import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks, contactInfo } from "@/data/site";
import { ArrowRight, Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-gold/20 text-white/70 overflow-hidden">
      
      {/* Background Luxury Glow & Subtle Image Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/images/factory.jpg"
          alt="EVIO Elevator factory"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-transparent" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 z-10">
        
        {/* Brand Column (Span 4) */}
        <div className="md:col-span-4 space-y-6">
          <div className="inline-flex items-center rounded-xl px-3 py-2 bg-gradient-to-b from-[#fdfaf5] to-[#f3ede1] shadow-[0_2px_12px_rgba(212,31,138,0.18)] ring-1 ring-white/40 w-fit">
            <Image
              src="/images/logo.jpeg"
              alt="Evio Elevator"
              width={150}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </div>

          <p className="text-sm text-white/70 font-light max-w-sm leading-relaxed">
            Elevating lifestyles with world-class engineering, absolute safety, and uncompromised luxury living.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {socialLinks
              .filter((social) => social.href && social.href !== "#")
              .map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-gold-light hover:border-gold-light/60 transition-all duration-300 shadow-md"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
          </div>

          <ul className="space-y-3 text-xs text-white/70 font-light pt-2">
            <li className="flex gap-2.5">
              <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
              <span>
                <span className="block text-gold-light font-semibold">Eastern Zone Office</span>
                {contactInfo.easternOffice}
              </span>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
              <span>
                <span className="block text-gold-light font-semibold">Head Office &amp; Factory</span>
                {contactInfo.headOffice}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
              <span className="flex flex-wrap gap-x-3">
                {contactInfo.phones.map((p) => (
                  <a key={p.href} href={p.href} className="hover:text-gold-light transition-colors">
                    {p.label}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
              <span className="flex flex-col break-all">
                {contactInfo.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="hover:text-gold-light transition-colors">
                    {e}
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </div>

        {/* Links Columns (Span 5 total) */}
        <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
          <FooterColumn title="Our Products" links={footerLinks.ourProducts} />
          <FooterColumn title="Support" links={footerLinks.support} />
        </div>

        {/* Newsletter Column (Span 3) */}
        <div className="md:col-span-3 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-gold-light/30 text-gold-light text-[10px] font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-2.5 h-2.5" /> Stay Updated
            </div>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">Newsletter</h3>
            <p className="text-xs text-white/70 font-light mt-1">Subscribe to get exclusive architectural updates &amp; offers.</p>
          </div>

          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/15 rounded-l-2xl px-4 py-3 text-xs w-full text-white placeholder:text-white/50 outline-none focus:border-gold-light transition-colors"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-gold text-white rounded-r-2xl px-5 flex items-center justify-center hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/60 font-light flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 lg:px-10 gap-3 z-10">
        <p>&copy; {new Date().getFullYear()} EVIO ELEVATOR. All Rights Reserved.</p>
        <p className="text-gold-light font-serif italic"></p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-4">
      <p className="font-serif text-xs font-bold text-gold-light uppercase tracking-widest">{title}</p>
      <ul className="space-y-2.5 text-xs text-white/70 font-light">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-gold-light transition-colors block py-0.5">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;
  switch (name) {
    case "Facebook":
      return (<svg {...common}><path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22h3.4z" /></svg>);
    case "Instagram":
      return (<svg {...common}><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.3-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" /></svg>);
    case "LinkedIn":
      return (<svg {...common}><path d="M6.9 8.9H3.7V20h3.2V8.9zM5.3 4a1.9 1.9 0 1 0 0 3.800A1.9 1.9 0 0 0 5.3 4zM20.3 13.700c0-3-1.6-4.9-4.2-4.9-1.2 0-2.2.600-2.7 1.500V8.900h-3.100V20h3.200v-5.800c0-1.5.7-2.4 1.9-2.400s1.7.9 1.7 2.400V20h3.200v-6.300z" /></svg>);
    case "YouTube":
      return (<svg {...common}><path d="M21.6 7.200a2.5 2.5 0 0 0-1.8-1.800C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.200C2 8.8 2 12 2 12s0 3.2.4 4.800a2.5 2.5 0 0 0 1.8 1.800C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.800c.4-1.6.4-4.8.4-4.800s0-3.2-.4-4.800zM10 15V9l5.2 3-5.2 3z" /></svg>);
    default:
      return null;
  }
}
