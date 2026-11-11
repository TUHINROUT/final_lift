"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/site";
import Button from "@/components/ui/Button";
import {
  ChevronDown,
  Home,
  Building2,
  Maximize2,
  Wind,
  Crown,
  Sparkles,
  Cpu,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Maximize2,
  Wind,
  Crown,
  Sparkles,
  Cpu,
  ShieldCheck,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  // Lock body scroll while the mobile drawer is open, and close on Escape.
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMobileGroup(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border">
      <div className="bg-bg-alt/95 backdrop-blur max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/images/logo.png"
            alt="Evio Elevator"
            width={220}
            height={80}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-text-muted">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group py-2">
              <Link
                href={link.href}
                className="flex items-center gap-1 hover:text-gold transition-colors"
              >
                {link.label}
                {link.children && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              {link.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                  <div className="w-[660px] bg-surface text-text shadow-2xl rounded-2xl p-4 border border-border grid grid-cols-2 gap-2 relative">
                    {/* Center Divider Line */}
                    <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-gold/10 hidden sm:block" />

                    {link.children.map((child) => {
                      const IconComponent = child.icon ? iconMap[child.icon] || Home : Home;
                      return (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-bg-alt transition-colors group/item"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover/item:bg-gold group-hover/item:text-white transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-text group-hover/item:text-gold transition-colors">
                              {child.title}
                            </p>
                            <p className="text-xs text-text-muted mt-0.5 line-clamp-2 leading-relaxed">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button variant="gold" className="text-xs px-5 py-2.5">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-text hover:border-gold hover:text-gold transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer panel - slides in from the right */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[86%] max-w-sm bg-bg-alt border-l border-border shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-out will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <Image
            src="/images/logo.png"
            alt="Evio Elevator"
            width={160}
            height={58}
            className="h-10 w-auto object-contain"
          />
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-text hover:border-gold hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {navLinks.map((link) => {
            const hasChildren = !!link.children;
            const isGroupOpen = openMobileGroup === link.label;
            return (
              <div key={link.label} className="border-b border-border/60 last:border-b-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex-1 py-3.5 px-2 text-[15px] text-text hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      onClick={() => setOpenMobileGroup(isGroupOpen ? null : link.label)}
                      aria-label={`Toggle ${link.label} submenu`}
                      aria-expanded={isGroupOpen}
                      className="p-3 text-text-muted hover:text-gold transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isGroupOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isGroupOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-2 pl-2 pr-1 flex flex-col gap-1">
                      {link.children!.map((child) => {
                        const IconComponent = child.icon ? iconMap[child.icon] || Home : Home;
                        return (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={closeMenu}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="font-medium text-sm text-text">{child.title}</p>
                              <p className="text-xs text-text-muted mt-0.5 leading-relaxed line-clamp-2">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border shrink-0">
          <Button variant="gold" className="w-full text-sm" onClick={closeMenu}>
            Get a Free Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
