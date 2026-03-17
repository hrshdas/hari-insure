"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────

const journeyCards = [
  {
    id: "health",
    title: "Know about health insurance",
    desc: "Coverage, claims, comparisons",
    href: "/health",
    accentColor: "#16a37f",
    iconBg: "#dcfce7",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "term",
    title: "Know about life / term insurance",
    desc: "Protect your family's future",
    href: "/term",
    accentColor: "#2563eb",
    iconBg: "#dbeafe",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "motor",
    title: "Know about motor insurance",
    desc: "Third-party, own damage, add-ons",
    href: "/motor",
    accentColor: "#f97316",
    iconBg: "#ffedd5",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "deal",
    title: "Know if you're getting a good deal",
    desc: "Compare plans & costs",
    href: "/tax",
    accentColor: "#9333ea",
    iconBg: "#f3e8ff",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    id: "claim",
    title: "Know your rights after a claim rejection",
    desc: "Rights, ombudsman, escalation",
    href: "/problems",
    accentColor: "#e11d48",
    iconBg: "#ffe4e6",
    icon: (
      <span style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1 }}>?</span>
    ),
  },
];

const trustBadges = [
  {
    label: "100% Free & Unbiased",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a37f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

// ─── Card Component ─────────────────────────────────────────────────────────

function JourneyCard({ card }: { card: (typeof journeyCards)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={card.href}
      className="flex items-center gap-4 bg-white rounded-2xl px-5 py-5 border border-gray-100 hover:-translate-y-0.5 transition-all duration-200"
      style={{
        boxShadow: hovered
          ? `0 8px 28px rgba(0,0,0,0.07), inset 3px 0 0 ${card.accentColor}`
          : `0 2px 10px rgba(0,0,0,0.04), inset 3px 0 0 ${card.accentColor}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Colored icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: card.iconBg, color: card.accentColor }}
      >
        {card.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[15px] text-brand-ink leading-snug">{card.title}</p>
        <p className="text-[13px] text-brand-muted mt-0.5">{card.desc}</p>
      </div>

      {/* Arrow */}
      <div
        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
        style={{ backgroundColor: hovered ? card.accentColor : "#f1f5f9" }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hovered ? "#fff" : "#94a3b8"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="hero-heading"
      style={{
        backgroundColor: "#f5f0e8",
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Beige tint overlay to maintain brand color while letting the image show through */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(245, 240, 232, 0.78)" }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#d1fae5]/70 border border-[#6ee7b7]/40 px-4 py-1.5 rounded-full mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em]"><span className="text-[#0d3d35]">Hari</span><span className="text-[#16a37f]">Insurance</span> <span className="text-[#065f46]">India</span></span>
          <span className="text-[11px] text-[#065f46]/60 font-medium">— Free Insurance Education</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-[1.75rem] min-[375px]:text-[2rem] sm:text-[4rem] lg:text-[5rem] font-extrabold tracking-tight leading-[1.06] text-center mb-6"
          style={{
            color: "#0d3d35",
            fontFamily:
              '"SF Pro Display", -apple-system, BlinkMacSystemFont, var(--font-inter), "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
        >
          Understand Insurance.<br />
          <span style={{ color: "#16a37f" }}>Make Better Decisions.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-lg sm:text-xl text-brand-muted leading-relaxed max-w-xl mb-16">
          Plain-English guides for every insurance question — clear, honest, and unbiased.
        </p>

        {/* Section label */}
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0d3d35]/40 mb-7">
          What brings you here today?
        </p>

        {/* Card grid: 3 top + 2 bottom centered */}
        <div className="w-full max-w-5xl space-y-4">
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {journeyCards.slice(0, 3).map((card) => (
              <JourneyCard key={card.id} card={card} />
            ))}
          </div>
          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-[calc(66.66%+8px)] mx-auto w-full">
            {journeyCards.slice(3).map((card) => (
              <JourneyCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-14 mb-10">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-[13px] font-semibold text-brand-muted/80">
              {b.icon}
              {b.label}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#cta"
          className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base sm:text-lg px-9 py-4 rounded-full shadow-lg shadow-brand-orange/20 transition-all duration-200 hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l4-4-4-4h12a2 2 0 0 1 2 2z" />
            <path d="M3 21V3" />
          </svg>
          Talk to a Licensed Advisor — Free
        </Link>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-[#0d3d35]/35">
          Licensed Advisor
        </p>
      </div>

      {/* Subtle background glows */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[32rem] h-[32rem] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
