const testimonials = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Software Engineer · Bengaluru",
    initials: "PS",
    avatarCls: "bg-brand-green-light text-brand-green",
    rating: 5,
    review:
      "Hari Insure made buying health insurance completely seamless. I compared 12 plans in 5 minutes and received my policy document instantly. Genuinely the best experience I've had.",
  },
  {
    id: "t2",
    name: "Rahul Mehta",
    role: "Business Owner · Mumbai",
    initials: "RM",
    avatarCls: "bg-orange-50 text-brand-orange",
    rating: 5,
    review:
      "Switching my car insurance through Hari Insure saved me ₹4,200 this year. And when I had a minor accident, their claim support team was hands-down incredible.",
  },
  {
    id: "t3",
    name: "Ananya Krishnan",
    role: "Doctor · Chennai",
    initials: "AK",
    avatarCls: "bg-purple-50 text-purple-600",
    rating: 5,
    review:
      "As a doctor I understand insurance deeply — Hari Insure is the most transparent platform I've seen. The term life cover I bought here gives me absolute peace of mind.",
  },
  {
    id: "t4",
    name: "Arjun Nair",
    role: "Startup Founder · Pune",
    initials: "AN",
    avatarCls: "bg-blue-50 text-blue-600",
    rating: 5,
    review:
      "Set up coverage for my whole team in under an hour. The group health plan options and pricing are unlike anything I found elsewhere. Highly recommend to every founder.",
  },
  {
    id: "t5",
    name: "Deepa Iyer",
    role: "Teacher · Hyderabad",
    initials: "DI",
    avatarCls: "bg-brand-green-light text-brand-green",
    rating: 5,
    review:
      "The comparison tool is so easy to understand — even for someone not very tech-savvy. I found a plan that covers my parents at a really affordable premium.",
  },
  {
    id: "t6",
    name: "Vikram Sinha",
    role: "Architect · Delhi",
    initials: "VS",
    avatarCls: "bg-orange-50 text-brand-orange",
    rating: 5,
    review:
      "Zero hidden charges, instant document delivery, and a support team that actually picks up the phone. That's all you need in an insurer and Hari Insure delivers.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f97316" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="relative bg-white rounded-2xl border border-brand-border shadow-card p-6 flex flex-col gap-4 w-[340px] flex-shrink-0 mx-3">
      {/* Opening quote */}
      <svg
        className="absolute top-4 right-5 text-brand-green/10"
        width="36" height="36" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true"
      >
        <path d="M10 25c0-6.627 5.373-12 12-12v5c-3.866 0-7 3.134-7 7v2h7v13H10V25zm18 0c0-6.627 5.373-12 12-12v5c-3.866 0-7 3.134-7 7v2h7v13H28V25z"/>
      </svg>

      <Stars count={t.rating} />

      <p className="text-sm text-brand-muted leading-relaxed flex-1">
        &ldquo;{t.review}&rdquo;
      </p>

      <footer className="flex items-center gap-3 pt-3 border-t border-brand-border">
        <div className={`w-9 h-9 rounded-full ${t.avatarCls} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-ink">{t.name}</p>
          <p className="text-xs text-brand-muted">{t.role}</p>
        </div>
      </footer>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate the array so the marquee loops seamlessly
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="section-wrap bg-brand-beige overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container-max">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Customer Stories</span>
          <h2 id="testimonials-heading" className="heading-lg text-center">
            Real stories,{" "}
            <span className="text-gradient-green">real peace of mind</span>
          </h2>
          <p className="body-lg text-center">
            Join 2 lakh+ families who trust Hari Insure for their protection needs.
          </p>
        </div>
      </div>

      {/* Full-bleed marquee (breaks out of container intentionally) */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Aggregate score */}
      <div className="container-max">
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-brand-muted">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f97316" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="font-bold text-brand-ink text-base">4.9</span>
          <span className="text-brand-border">·</span>
          <span>Based on 18,400+ verified reviews</span>
        </div>
      </div>
    </section>
  );
}
