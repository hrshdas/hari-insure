"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xeojkjla"; // reuse existing endpoint

interface LeadFormProps {
  variant?: "sidebar" | "large";
  className?: string;
}

export default function LeadForm({ variant = "sidebar", className = "" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, phone, topic }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setTopic("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isLarge = variant === "large";

  const containerBaseClass = isLarge 
    ? "rounded-3xl border border-brand-green/20 bg-white p-8 md:p-10 shadow-lg max-w-5xl mx-auto" 
    : "rounded-2xl border border-brand-green/20 bg-white p-5 sticky top-24 shadow-sm";

  return (
    <div className={`${containerBaseClass} ${className}`}>
      {/* Header */}
      <div className={`flex ${isLarge ? 'flex-col md:flex-row md:items-center justify-between mb-8' : 'items-center gap-2.5 mb-4'}`}>
        <div className={`flex items-center ${isLarge ? 'gap-4 mb-6 md:mb-0' : 'gap-2.5'}`}>
          <div className={`${isLarge ? 'w-14 h-14' : 'w-9 h-9'} rounded-xl bg-green-gradient flex items-center justify-center flex-shrink-0`}>
            <svg width={isLarge ? "24" : "16"} height={isLarge ? "24" : "16"} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div>
            <p className={`${isLarge ? 'text-2xl md:text-3xl' : 'text-sm'} font-bold text-brand-ink leading-tight`}>
              Talk to a Licensed Advisor
            </p>
            <p className={`${isLarge ? 'text-sm mt-1.5' : 'text-[11px]'} text-brand-muted`}>
              Free · Unbiased · Licensed advisor
            </p>
          </div>
        </div>
      </div>

      {status === "success" ? (
        <div className={`text-center ${isLarge ? 'py-10' : 'py-5'}`}>
          <div className={`${isLarge ? 'w-16 h-16' : 'w-10 h-10'} rounded-full bg-brand-green-light flex items-center justify-center mx-auto mb-4`}>
            <svg width={isLarge ? "32" : "18"} height={isLarge ? "32" : "18"} viewBox="0 0 24 24" fill="none" stroke="#16a37f" strokeWidth="2.5" strokeLinecap="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <p className={`${isLarge ? 'text-xl' : 'text-sm'} font-semibold text-brand-ink`}>We&apos;ll call you shortly!</p>
          <p className={`${isLarge ? 'text-base mt-2' : 'text-xs mt-1'} text-brand-muted`}>Our advisor will reach out within a few hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`flex ${isLarge ? 'flex-col md:flex-row gap-4 lg:gap-6 items-end' : 'flex-col gap-3'}`}>
          <div className={`${isLarge ? 'flex-1 w-full' : ''}`}>
            <label htmlFor={`lead-name-${variant}`} className={`${isLarge ? 'text-xs mb-2' : 'text-[11px] mb-1'} font-semibold text-brand-muted uppercase tracking-wide block`}>
              Your Name
            </label>
            <input
              id={`lead-name-${variant}`}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Rahul Sharma"
              required
              className={`w-full rounded-xl border border-gray-200 ${isLarge ? 'px-4 py-3.5 text-base' : 'px-3 py-2.5 text-sm'} text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all`}
            />
          </div>

          <div className={`${isLarge ? 'flex-1 w-full' : ''}`}>
            <label htmlFor={`lead-phone-${variant}`} className={`${isLarge ? 'text-xs mb-2' : 'text-[11px] mb-1'} font-semibold text-brand-muted uppercase tracking-wide block`}>
              Phone Number
            </label>
            <input
              id={`lead-phone-${variant}`}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              required
              className={`w-full rounded-xl border border-gray-200 ${isLarge ? 'px-4 py-3.5 text-base' : 'px-3 py-2.5 text-sm'} text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all`}
            />
          </div>

          <div className={`${isLarge ? 'flex-1 w-full' : ''}`}>
            <label htmlFor={`lead-topic-${variant}`} className={`${isLarge ? 'text-xs mb-2' : 'text-[11px] mb-1'} font-semibold text-brand-muted uppercase tracking-wide block`}>
              Topic
            </label>
            <select
              id={`lead-topic-${variant}`}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              className={`w-full rounded-xl border border-gray-200 ${isLarge ? 'px-4 py-3.5 text-base' : 'px-3 py-2.5 text-sm'} text-brand-ink bg-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all`}
            >
              <option value="" disabled>Select…</option>
              <option value="health">Health Insurance</option>
              <option value="term">Term / Life</option>
              <option value="motor">Motor</option>
              <option value="claim">Claim Help</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={`${isLarge ? 'w-full md:w-auto mt-4 md:mt-0 lg:min-w-[200px]' : 'w-full'}`}>
            <button
              type="submit"
              disabled={status === "loading"}
              className={`btn-primary w-full ${isLarge ? 'py-4 text-base rounded-xl' : 'text-sm mt-1'} disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {status === "loading" ? "Sending…" : "Request Callback"}
            </button>
            {!isLarge && (
              <p className="text-[10px] text-brand-muted text-center mt-3">
                Licensed advisors · 100% free · No commissions
              </p>
            )}
          </div>
        </form>
      )}
      {status === "error" && (
        <p className={`text-red-500 mt-2 ${isLarge ? 'text-sm text-center md:text-left' : 'text-xs'}`}>
          Something went wrong. Please try again.
        </p>
      )}
      {isLarge && status !== "success" && (
        <p className="text-sm text-brand-muted text-center md:text-left mt-6">
          Licensed advisors · 100% free · No commissions
        </p>
      )}
    </div>
  );
}
