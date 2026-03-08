"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Health", href: "#plans" },
  { label: "Life", href: "#plans" },
  { label: "Motor", href: "#plans" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-brand-border/70 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Hari Insure Home">
            <div className="w-8 h-8 rounded-xl bg-green-gradient flex items-center justify-center shadow-green-glow/60 transition-transform group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.95"/>
              </svg>
            </div>
            <span className="text-[17px] font-bold tracking-tight text-brand-ink">
              Hari<span className="text-brand-green">Insure</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-brand-muted rounded-lg hover:text-brand-ink hover:bg-brand-beige-2 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2.5">
            <Link
              href="#cta"
              id="nav-cta-btn"
              className="hidden sm:inline-flex btn-primary"
            >
              Get a Quote
            </Link>
            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 rounded-lg text-brand-muted hover:text-brand-ink hover:bg-brand-beige-2 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-spring ${
            menuOpen ? "max-h-80 opacity-100 pb-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl border border-brand-border shadow-card p-3 mt-2 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2.5 text-sm font-medium text-brand-muted hover:text-brand-ink hover:bg-brand-beige-2 rounded-xl transition-all duration-150"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2.5 mt-1 border-t border-brand-border">
              <Link
                href="#cta"
                className="btn-primary w-full text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
