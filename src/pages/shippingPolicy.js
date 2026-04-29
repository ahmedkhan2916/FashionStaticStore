import { Link } from "react-router-dom";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

const sections = [
  {
    title: "Delivery Time",
    text: "We process and dispatch orders as quickly as possible to ensure a smooth shopping experience. Orders are typically delivered within 3 to 7 business days, depending on your location and courier service availability.",
  },
  {
    title: "Shipping Charges",
    text: "A standard shipping charge of Rs. 50 is applicable on all orders. Any additional shipping-related information, if applicable, will be clearly displayed at checkout before payment confirmation.",
  },
  {
    title: "Return / Refund Policy",
    text: "For complete information regarding returns, refunds, and eligibility conditions, please refer to our dedicated Return & Refund Policy page.",
    linkText: "View Return & Refund Policy",
    linkTo: "/refund",
  },
];

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Legal
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase text-slate-900 sm:text-4xl">
            Shipping Policy
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">
            At SSS Clothing, we are committed to delivering your orders in a
            timely and transparent manner. Please review our shipping policy
            carefully before placing your order.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-8 text-neutral-600">
                  {section.text}
                </p>
                {section.linkTo ? (
                  <Link
                    to={section.linkTo}
                    className="mt-3 inline-flex text-sm font-semibold text-red-500 transition hover:text-red-600"
                  >
                    {section.linkText}
                  </Link>
                ) : null}
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
