import Link from "next/link";
import AdvisorCTA from "./AdvisorCTA";
import LeadForm from "./LeadForm";

interface Breadcrumb {
  label: string;
  href: string;
}

interface ArticleLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Breadcrumb[];
  title: React.ReactNode;
  readTime?: string;
  pillarColor?: string;
  sidebar?: React.ReactNode;
  prevArticle?: { label: string; href: string };
  nextArticle?: { label: string; href: string };
}

export default function ArticleLayout({
  children,
  breadcrumbs,
  title,
  readTime,
  pillarColor = "#16a37f",
  sidebar,
  prevArticle,
  nextArticle,
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      {/* Article header */}
      <div
        className="pt-20 pb-10 px-4 sm:px-6 lg:px-8"
        style={{ background: "white", borderBottom: "1px solid #e2e8f0" }}
      >
        <div className="container-max">
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-brand-muted mb-4">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.href} className="flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-brand-ink font-medium">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-brand-ink transition-colors">{crumb.label}</Link>
                  )}
                </span>
              ))}
            </nav>
          )}
          <div className="flex items-start gap-3">
            <div
              className="w-1 h-12 rounded-full flex-shrink-0 mt-1"
              style={{ backgroundColor: pillarColor }}
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-ink leading-tight">{title}</h1>
              {readTime && (
                <p className="text-xs text-brand-muted mt-1.5 flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {readTime} · Free guide
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className={`grid gap-8 lg:grid-cols-[1fr_300px]`}>
          {/* Main content */}
          <article className="prose-article">
            {children}

            {/* Prev/Next nav */}
            {(prevArticle || nextArticle) && (
              <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-brand-border">
                {prevArticle ? (
                  <Link
                    href={prevArticle.href}
                    className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-ink transition-colors group"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <span className="group-hover:underline">{prevArticle.label}</span>
                  </Link>
                ) : <div />}
                {nextArticle && (
                  <Link
                    href={nextArticle.href}
                    className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-ink transition-colors group"
                  >
                    <span className="group-hover:underline">{nextArticle.label}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                )}
              </div>
            )}

            {/* Inline advisor CTA */}
            <AdvisorCTA variant="inline" />
          </article>

          {/* Sidebar — always visible on large screens */}
          <aside className="hidden lg:block">
            <div className="space-y-5">
              <LeadForm />
              {sidebar && sidebar}
            </div>
          </aside>
        </div>
      </div>
      
      {/* Bottom wide lead form above footer */}
      <section className="bg-brand-green-light/30 py-16 border-t border-brand-green/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-3 font-outfit">
              Need Help Choosing?
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Our licensed advisors can help you navigate policies and find the best coverage for your family.
            </p>
          </div>
          <LeadForm variant="large" />
        </div>
      </section>
    </div>
  );
}
