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
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f97316" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-wrap bg-brand-beige" aria-labelledby="testimonials-heading">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="group relative bg-white rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-spring p-6 flex flex-col gap-5"
            >
              {/* Opening quote mark */}
              <svg
                className="absolute top-5 right-6 text-brand-green/10 group-hover:text-brand-green/15 transition-colors"
                width="40" height="40" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true"
              >
                <path d="M10 25c0-6.627 5.373-12 12-12v5c-3.866 0-7 3.134-7 7v2h7v13H10V25zm18 0c0-6.627 5.373-12 12-12v5c-3.866 0-7 3.134-7 7v2h7v13H28V25z"/>
              </svg>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Review text */}
              <p className="text-sm text-brand-muted leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className={`w-10 h-10 rounded-full ${t.avatarCls} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Aggregate score */}
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
