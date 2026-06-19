"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  const navigationLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-surface-dim/30 shadow-ambient backdrop-blur-md bg-opacity-95 transition-all">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO / BRAND NAME */}
        <Link href="/" className="flex flex-col justify-center">
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary">
            ACEVEDO PUCCI
          </span>
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-text-variant font-semibold -mt-1">
            & Associates LLC
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-display font-semibold text-sm text-text-main hover:text-secondary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Bilingual Toggle Control */}
          <div className="flex bg-surface-low p-1 rounded-sm border border-surface-dim/20">
            <button
              onClick={() => setLanguage("EN")}
              className={`px-3 py-1 text-xs font-body font-semibold rounded-xs transition-all duration-200 ${
                language === "EN"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-variant hover:text-primary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ES")}
              className={`px-3 py-1 text-xs font-body font-semibold rounded-xs transition-all duration-200 ${
                language === "ES"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-variant hover:text-primary"
              }`}
            >
              ES
            </button>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary/90 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Quick Language Toggle Mobile */}
          <button
            onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
            className="text-xs font-body font-bold border border-primary/20 px-2 py-1 rounded-xs bg-surface-low text-primary"
          >
            {language}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-surface-dim/20 px-6 py-4 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display font-semibold text-base text-text-main hover:text-secondary py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-surface-low">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-secondary text-white font-body font-semibold text-sm py-3 rounded-sm shadow-sm"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}