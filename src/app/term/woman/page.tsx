import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Term Insurance for Women and Homemakers — HariInsurance India",
  description: "Why women, including homemakers, should have term insurance — and how it works for non-earning family members.",
};

export default function TermWoman() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Term Insurance for Women and Homemakers"
          readTime="3 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "For Women", href: "/term/woman" },
          ]}
        >
          <p>Term insurance is not just for earning members. Women — working or homemakers — have insurable value, and having cover ensures financial stability for the family.</p>

          <h2>For working women</h2>
          <p>If you earn and have dependants, you need term insurance just like any working individual. You may actually get <strong>slightly lower premiums</strong> because women statistically have lower mortality rates than men of the same age.</p>

          <h2>For homemakers</h2>
          <p>A homemaker&apos;s economic contribution is real but unquantified. If a homemaker passes away, the surviving spouse must pay for childcare, cooking, elder care, and household management. Insurers allow homemakers to purchase term cover based on the <strong>spouse&apos;s income as a proxy</strong> — typically up to 50% of the earning spouse&apos;s cover amount.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Special policies for women</p>
            <p className="text-sm text-brand-muted">Some insurers offer women-specific riders covering conditions like breast cancer, cervical cancer, and complications during childbirth at very low additional premiums.</p>
          </div>

          <h2>Documents typically needed for homemakers</h2>
          <ul>
            <li>Identity and address proof</li>
            <li>Spouse&apos;s income proof and existing policy details</li>
            <li>Marriage certificate</li>
            <li>Medical examination (for higher sum assured)</li>
          </ul>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
