import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Talk to an Advisor — HariInsurance India",
  description: "Book a free, zero-pressure consultation with our unbiased insurance experts.",
};

export default function TalkToAdvisor() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-brand-sand min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-8 lg:pt-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink mb-4 font-outfit">
              Talk to an expert, <br className="hidden sm:block"/>not a salesperson.
            </h1>
            <p className="text-xl text-brand-muted">
              Book a free 15-minute consultation to review your existing policy or figure out what you actually need.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-brand-green/10 overflow-hidden">
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-brand-ink mb-6 font-outfit">What to expect</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold">1</div>
                  <div>
                    <p className="font-semibold text-brand-ink">Complete policy review</p>
                    <p className="text-sm text-brand-muted">We&apos;ll look at your existing policies and tell you if they are junk (endowment/ULIP) or actually good.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold">2</div>
                  <div>
                    <p className="font-semibold text-brand-ink">Needs analysis</p>
                    <p className="text-sm text-brand-muted">We help calculate your exact sum insured requirement based on your income, liabilities and family setup.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold">3</div>
                  <div>
                    <p className="font-semibold text-brand-ink">Zero pressure</p>
                    <p className="text-sm text-brand-muted">We don&apos;t spam call. We don&apos;t push high-commission junk plans. You get entirely objective advice.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gray-50">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-brand-ink mb-2">First name</label>
                    <input type="text" id="first-name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-brand-ink mb-2">Last name</label>
                    <input type="text" id="last-name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-shadow" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-ink mb-2">Email address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-shadow" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-ink mb-2">Phone number (WhatsApp)</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-shadow" />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-brand-ink mb-2">What do you want to discuss?</label>
                  <select id="topic" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-shadow bg-white">
                    <option>Buying new Health Insurance</option>
                    <option>Buying new Term Insurance</option>
                    <option>Reviewing an existing policy</option>
                    <option>Help with a rejected claim</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-brand-green text-white font-medium rounded-full hover:bg-brand-green-hover transition-colors shadow-sm text-lg">
                    Request a Callback
                  </button>
                  <p className="text-xs text-brand-muted mt-4">
                    By submitting this form you agree to be contacted via WhatsApp/Phone by our advisory team. Your data is secure.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
