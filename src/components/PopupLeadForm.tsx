"use client";

import { useState, useEffect } from "react";
import LeadForm from "./LeadForm";
import { usePathname } from "next/navigation";

export default function PopupLeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show popup on the glossary page
    if (pathname === "/glossary") {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 sm:px-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden shadow-brand-green/20">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-brand-muted hover:text-brand-ink hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="pt-2">
          <LeadForm variant="sidebar" className="border-none shadow-none !p-6" />
        </div>
      </div>
    </div>
  );
}
