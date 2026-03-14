import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Insurance Glossary — Plain English Dictionary — Hari Insurance India",
  description: "A-Z dictionary of Indian insurance terms explained in simple English without the jargon.",
};

export default function Glossary() {
  const terms = [
    {
      term: "Claim Settlement Ratio (CSR)",
      def: "The percentage of claims an insurer pays out compared to the number they receive. A 95% CSR means out of 100 claims filed, 95 were paid. It is measured by volume, not value.",
    },
    {
      term: "Co-payment",
      def: "A clause where you must pay a fixed percentage of every health claim out of your own pocket. If your bill is ₹1,00,000 and you have a 20% co-pay, you pay ₹20,000, the insurer pays ₹80,000. Under-60s should avoid this.",
    },
    {
      term: "Consumables",
      def: "Items used during a hospital stay that get thrown away: gloves, masks, PPE kits, syringes, cotton. Standard policies do not cover these. Often accounts for 5-10% of a hospital bill.",
    },
    {
      term: "Day Care Procedure",
      def: "Medical treatments that require hospitalisation but take less than 24 hours due to modern technology (e.g., cataract surgery, dialysis, chemotherapy). Good policies cover 300+ of these.",
    },
    {
      term: "Deductible",
      def: "The amount you agree to pay out-of-pocket before the insurance coverage kicks in. Commonly used in 'Super Top-Up' health policies and motor insurance to lower the premium.",
    },
    {
      term: "Endowment Plan",
      def: "A life insurance policy that mixes pure life cover with an investment component. High premiums, low cover, low returns (typically 4-6%). Not recommended for most people.",
    },
    {
      term: "IDV (Insured Declared Value)",
      def: "The current market value of your vehicle. This is the maximum amount your motor insurance will pay if the car is stolen or completely destroyed.",
    },
    {
      term: "Incurred Claim Ratio (ICR)",
      def: "The total value of claims an insurer pays out divided by the total premiums they collected. Shows financial health. <50% = they overcharge or deny claims. >100% = they are losing money. Ideal is 70-90%.",
    },
    {
      term: "No Claim Bonus (NCB)",
      def: "Your reward for not making a claim in a year. In health insurance, it increases your sum insured (cover amount) for free. In motor insurance, it gives you a discount on your next year's premium.",
    },
    {
      term: "PED (Pre-Existing Disease)",
      def: "Any medical condition you had signs, symptoms, or treatment for in the 48 months before buying a policy. E.g., diabetes, asthma. Must be disclosed honestly.",
    },
    {
      term: "Portability",
      def: "The right to transfer your health insurance policy to a different insurer without losing the waiting period credit you've already accumulated.",
    },
    {
      term: "Restoration Benefit",
      def: "A health insurance feature where the insurer refills your sum insured if you exhaust it during the year. Check if it refills for the 'same' illness or only for 'different' illnesses.",
    },
    {
      term: "Return of Premium (ROP)",
      def: "A type of term insurance that gives you back all the premiums you paid if you survive until the end of the term. Sounds good, but the premium is very high. Usually a bad mathematical deal.",
    },
    {
      term: "Sum Assured / Sum Insured",
      def: "The maximum cover amount. 'Assured' is used for life/term plans where the exact amount is guaranteed to be paid on death. 'Insured' is used for health plans where the insurer pays up to that maximum limit based on the actual hospital bill.",
    },
    {
      term: "Term Insurance",
      def: "The simplest, cheapest form of life insurance. You pay a premium for a set number of years. If you die, your family gets a large sum. If you survive, you get nothing. Pure protection.",
    },
    {
      term: "Sub-limit",
      def: "A hidden cap within your total cover. For example, your total cover is ₹5 lakh, but cataract surgery has a 'sub-limit' of ₹40,000. Even if the surgery costs ₹60,000, the insurer only pays ₹40,000.",
    },
    {
      term: "Waiting Period",
      def: "A period during which certain conditions are not covered. Typical wait times: 30 days for general illnesses, 2 years for specific slow-growing diseases (cataract, hernia), and 2-4 years for pre-existing diseases.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-brand-sand min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-brand-ink mb-4 font-outfit">
              Insurance Glossary
            </h1>
            <p className="text-xl text-brand-muted">
              The A-Z dictionary of Indian insurance terms translated into plain English. No jargon allowed.
            </p>
          </div>

          <div className="space-y-6">
            {terms.sort((a,b) => a.term.localeCompare(b.term)).map((item) => (
              <div key={item.term} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-green/10">
                <h3 className="text-xl font-bold text-brand-ink mb-2">
                  {item.term}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {item.def}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-green/10 rounded-2xl p-8 text-center border border-brand-green/20">
            <h2 className="text-2xl font-bold text-brand-ink mb-3 font-outfit">Can&apos;t find a term?</h2>
            <p className="text-brand-muted mb-6">Our experts can explain your policy document line by line.</p>
            <a 
              href="/talk-to-advisor"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-green hover:bg-brand-green-hover transition-colors shadow-sm"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
