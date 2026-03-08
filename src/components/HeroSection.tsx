"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
      style={{ background: "#f5f0e8" }}
    >
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-[0.3]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 lg:py-28">

          {/* ── Left column ── */}
          <div className="flex flex-col items-start gap-6">

            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="block w-8 h-[2px] bg-brand-orange rounded-full" />
              <span className="text-sm font-semibold text-brand-orange tracking-wide">A Promise of Care</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] font-bold tracking-tight leading-[1.1]"
              style={{ color: "#0d3d35" }}
            >
              Secure your<br />
              family&apos;s future<br />
              with confidence.
            </h1>

            {/* Subtext */}
            <p className="text-base text-brand-muted leading-relaxed max-w-[30rem]">
              Experience premium protection tailored for your modern lifestyle with India&apos;s most trusted digital insurer.
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-3 pt-1">
              <Link
                href="#cta"
                id="hero-primary-btn"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm text-white px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#0d3d35" }}
              >
                Start Your Protection
              </Link>
              <Link
                href="#plans"
                id="hero-view-plans-btn"
                className="inline-flex items-center justify-center font-semibold text-sm px-7 py-3.5 rounded-full border-2 transition-all duration-200 hover:-translate-y-0.5 bg-transparent"
                style={{ borderColor: "#0d3d35", color: "#0d3d35" }}
              >
                View Plans
              </Link>
            </div>
          </div>

          {/* ── Right column: Photo image cards ── */}
          <div className="hidden lg:grid gap-3 h-[480px]" style={{ gridTemplateColumns: "1.15fr 1fr" }}>

            {/* Large left card — Health */}
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-card-lifted">
              <Image
                src="/health-card.png"
                alt="Health Insurance"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 0px, 280px"
              />
              {/* dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-white/30">
                  Best Seller
                </span>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-2xl leading-none">Health</p>
              </div>
            </div>

            {/* Right column: Life + Motor stacked */}
            <div className="flex flex-col gap-3">

              {/* Life card */}
              <div className="relative flex-1 rounded-3xl overflow-hidden group cursor-pointer shadow-card-lifted">
                <Image
                  src="/life-card.png"
                  alt="Life Insurance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 0px, 220px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-xl leading-none">Life</p>
                  <p className="text-white/70 text-xs mt-1">Protecting your legacy</p>
                </div>
              </div>

              {/* Motor card */}
              <div className="relative flex-1 rounded-3xl overflow-hidden group cursor-pointer shadow-card-lifted">
                <Image
                  src="/motor-card.png"
                  alt="Motor Insurance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 0px, 220px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-xl leading-none">Motor</p>
                  <p className="text-white/70 text-xs mt-1">Smart vehicle security</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: simple 3-card row */}
          <div className="lg:hidden grid grid-cols-3 gap-3 h-44">
            {[
              { src: "/health-card.png", label: "Health" },
              { src: "/life-card.png",   label: "Life"   },
              { src: "/motor-card.png",  label: "Motor"  },
            ].map((c) => (
              <div key={c.label} className="relative rounded-2xl overflow-hidden shadow-card">
                <Image src={c.src} alt={c.label} fill className="object-cover" sizes="30vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-2 left-3 text-white font-bold text-sm">{c.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
