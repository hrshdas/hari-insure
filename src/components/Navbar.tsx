"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Health", href: "/health" },
  { label: "Life", href: "/term" },
  { label: "Motor", href: "/motor" },
  { label: "Guides", href: "/tax" },
  { label: "Glossary", href: "/glossary" },
  { label: "Help", href: "/problems" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Hari Insurance India Home">
            <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="Hari Insurance Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-[19px] font-bold tracking-tight text-gray-900">
              Hari<span className="text-brand-green">Insurance</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-[15px] font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-brand-green bg-brand-green/10"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/talk-to-advisor"
              id="nav-advisor-btn"
              className="hidden md:inline-flex items-center justify-center bg-gray-900 hover:bg-brand-green text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Licensed Advisor
            </Link>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                    isActive
                      ? "text-brand-green bg-brand-green/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                href="/talk-to-advisor"
                className="flex items-center justify-center w-full bg-gray-900 hover:bg-brand-green text-white font-semibold py-3 rounded-xl transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Talk to a Licensed Advisor
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
