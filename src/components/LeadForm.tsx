"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xeojkjla"; // reuse existing endpoint

export default function LeadForm() {
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

  return (
    <div className="rounded-2xl border border-brand-green/20 bg-white p-5 sticky top-24 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-xl bg-green-gradient flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-ink leading-tight">Talk to a Licensed Advisor</p>
          <p className="text-[11px] text-brand-muted">Free · No pressure · IRDAI licensed</p>
        </div>
      </div>

      {status === "success" ? (
        <div className="text-center py-5">
          <div className="w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center mx-auto mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a37f" strokeWidth="2.5" strokeLinecap="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <p className="text-sm font-semibold text-brand-ink">We'll call you shortly!</p>
          <p className="text-xs text-brand-muted mt-1">Our advisor will reach out within a few hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label htmlFor="lead-name" className="text-[11px] font-semibold text-brand-muted uppercase tracking-wide block mb-1">
              Your Name
            </label>
            <input
              id="lead-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Rahul Sharma"
              required
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all"
            />
          </div>

          <div>
            <label htmlFor="lead-phone" className="text-[11px] font-semibold text-brand-muted uppercase tracking-wide block mb-1">
              Phone Number
            </label>
            <input
              id="lead-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              required
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all"
            />
          </div>

          <div>
            <label htmlFor="lead-topic" className="text-[11px] font-semibold text-brand-muted uppercase tracking-wide block mb-1">
              What do you need help with?
            </label>
            <select
              id="lead-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-brand-ink bg-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all"
            >
              <option value="" disabled>Select a topic…</option>
              <option value="health">Health Insurance</option>
              <option value="term">Term / Life Insurance</option>
              <option value="motor">Motor Insurance</option>
              <option value="claim">Claim Help</option>
              <option value="other">Something else</option>
            </select>
          </div>

          {status === "error" && (
            <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full text-sm mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Request a Callback"}
          </button>

          <p className="text-[10px] text-brand-muted text-center">
            IRDAI-licensed advisors · 100% free · No commissions
          </p>
        </form>
      )}
    </div>
  );
}
