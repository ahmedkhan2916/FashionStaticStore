import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Contact Us
          </p>

          <h1 className="mt-4 text-3xl font-black uppercase text-slate-900 sm:text-4xl">
            Contact Us - SSS Clothing
          </h1>

          <p className="mt-6 text-base leading-8 text-neutral-600">
            We&apos;re here to help. If you have any questions, concerns, or need
            assistance, feel free to reach out to us.
          </p>

          <div className="mt-8 space-y-8 text-neutral-600">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Email Support</h2>
              <p className="mt-2 text-base leading-8">
                For general inquiries, orders, or support:
              </p>
              <p className="text-base font-semibold text-slate-900">
                SS.ENTERPRISES11900@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">Phone Support</h2>
              <p className="mt-2 text-base font-semibold text-slate-900">
                Customer Care: +91-8506926037
              </p>
              <p className="text-base leading-8">
                Monday to Saturday, 10:00 AM - 6:00 PM
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">Address</h2>
              <p className="mt-2 text-base leading-8">
                SSS Clothing
                <br />
                D567 BHAGIRATHI VIHAR mustafabad delhi 110094
                <br />
                India
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Customer Support
              </h2>
              <p className="mt-2 text-base leading-8">
                We aim to respond to all queries within 24-48 hours.
              </p>
              <p className="mt-2 text-base leading-8">
                Thank you for choosing SSS Clothing. We appreciate your trust
                and look forward to serving you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
