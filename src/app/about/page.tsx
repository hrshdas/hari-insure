import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "About Us — Hari Insurance India",
  description: "Learn about Hari Insurance, India's most unbiased insurance education platform.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title={<>About Hari <span className="text-brand-green">Insurance</span></>}
          pillarColor="#16a37f"
          breadcrumbs={[{ label: "About Us", href: "/about" }]}
        >
          <p className="lead">
            We started Hari Insurance because we were tired of the spam, the pushy sales calls, and the confusing jargon that dominates the Indian insurance industry. We believe that protecting your family shouldn&apos;t be a stressful or misleading experience.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to be India&apos;s most unbiased and transparent insurance education platform. We don&apos;t just sell insurance; we educate you so you can make right choice for your family and your future. 
          </p>
          <p>
            We believe in giving you the tools, data, and knowledge you need to compare policies fairly, understand the fine print, and buy with confidence.
          </p>

          <h2>Our Unbiased Promise</h2>
          <p>
            Unlike many other platforms, we don&apos;t push &quot;junk&quot; policies just because they offer higher commissions. We operate on a strict code of ethics:
          </p>
          <ul>
            <li><strong>Zero Spam:</strong> We will never spam your inbox or blow up your phone with unwanted calls.</li>
            <li><strong>No Hidden Agendas:</strong> We provide clear, objective comparisons based on facts and data, not on which insurer pays us the most.</li>
            <li><strong>Expert Guidance:</strong> Our advisors are licensed, highly trained, and salaried—meaning they aren&apos;t incentivized to pressure you into a quick sale.</li>
          </ul>

          <h2>Why Trust Us?</h2>
          <p>
            Insurance is a long-term commitment, often lasting decades. You need a partner who will be there for you not just when you buy the policy, but when you actually need to make a claim. We guide you through the entire process, including claim assistance, so you are never left alone during a crisis.
          </p>

          <p>
            Thank you for trusting Hari Insurance. We are here to help you protect what matters most.
          </p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
