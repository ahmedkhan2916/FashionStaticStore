import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

const sections = [
  {
    title: "Order Cancellation",
    text: "Orders can be cancelled within 24 hours of placing the order. Once the order has been processed or shipped, cancellation will no longer be possible.",
  },
  {
    title: "Return Eligibility",
    text: "We accept returns only if you receive a damaged, defective, or incorrect product. To be eligible, the item must be unused, in original condition, and returned with original packaging within 30 days of delivery.",
  },
  {
    title: "Refund Policy",
    text: "After receiving and inspecting the returned product, we will notify you regarding approval. If approved, the refund will be processed within 5–7 business days to your original payment method.",
  },
  {
    title: "Non-Refundable Items",
    text: "Products purchased on sale or discount are not eligible for refunds unless they are defective or incorrect. Customized or special edition items are strictly non-refundable.",
  },
  {
    title: "Return Process",
    text: "To initiate a return, please contact us at support@sssclothing.com. Our support team will guide you through the complete return process.",
  },
  {
    title: "Shipping Charges",
    text: "Shipping charges are non-refundable. Return shipping costs may be borne by the customer unless the product received is defective or incorrect.",
  },
  {
    title: "Late or Missing Refunds",
    text: "If you have not received your refund, first check your bank account and contact your payment provider as processing time may vary. If the issue persists, contact us at ss.enterprises11900@gmail.com.",
  },
  {
    title: "Policy Agreement",
    text: "By placing an order on SSS Clothing, you agree to this Refund & Cancellation Policy.",
  },
];

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Legal
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase text-slate-900 sm:text-4xl">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">
            At SSS Clothing, we aim to provide high-quality products and a smooth
            shopping experience. Please read our refund and cancellation policy
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
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}