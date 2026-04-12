import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

const sections = [
  {
    title: "Acceptance of Terms",
    text: "By accessing or using this website, you agree to be bound by these Terms and Conditions, along with any related policies posted on the platform. If you do not agree, please do not use the website.",
  },
  {
    title: "Products and Availability",
    text: "We try to display products, descriptions, colors, prices, and availability as accurately as possible. However, product images may vary slightly depending on device screens, and availability may change without prior notice.",
  },
  {
    title: "Pricing and Payments",
    text: "All prices listed on the platform are shown in the applicable currency and may be updated at any time. Orders will only be processed after successful payment confirmation or valid cash-on-delivery selection, where available.",
  },
  {
    title: "Orders and Cancellations",
    text: "Placing an order does not guarantee acceptance. We reserve the right to cancel or refuse any order due to stock issues, incorrect pricing, suspected fraud, or other operational reasons. If payment has already been made, any approved refund will be processed according to our refund policy.",
  },
  {
    title: "Shipping and Delivery",
    text: "Delivery timelines are estimates and may vary depending on location, courier service, weather, holidays, or other external factors. We are not responsible for delays caused by third-party logistics providers after dispatch.",
  },
  {
    title: "Returns and Exchanges",
    text: "Returns and exchanges are subject to our return policy. Items may need to be unused, unwashed, and returned in original packaging with tags intact. Certain products, sale items, or personalized items may not be eligible for return or exchange.",
  },
  {
    title: "User Responsibilities",
    text: "Users agree to provide accurate account, billing, shipping, and contact information. You must not misuse the site, interfere with its functionality, attempt unauthorized access, or use the platform for unlawful purposes.",
  },
  {
    title: "Intellectual Property",
    text: "All content on this website, including designs, logos, text, graphics, product imagery, and branding, is owned by or licensed to the platform and may not be copied, reproduced, distributed, or used without prior permission.",
  },
  {
    title: "Limitation of Liability",
    text: "To the fullest extent permitted by law, the platform shall not be liable for indirect, incidental, special, or consequential damages arising out of your use of the website, purchase of products, or inability to access the service.",
  },
  {
    title: "Privacy",
    text: "Your use of this platform is also subject to our privacy practices. By using the website, you acknowledge that certain personal information may be collected and processed for order fulfillment, customer support, and service improvement.",
  },
  {
    title: "Changes to Terms",
    text: "We may update or revise these Terms and Conditions at any time without prior notice. Continued use of the website after such changes means you accept the updated terms.",
  },
  {
    title: "Contact Information",
    text: "If you have any questions regarding these Terms and Conditions, you may contact us through the customer support details provided on the website.",
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Legal
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase text-slate-900 sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">
            These Terms and Conditions govern the use of this ecommerce fashion
            platform and apply to all visitors, users, and customers who access
            or purchase from the website.
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
