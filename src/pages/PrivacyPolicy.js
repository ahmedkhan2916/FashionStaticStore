import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

const sections = [
  {
    title: "Information We Collect",
    text: "We may collect personal information such as your name, email address, phone number, shipping address, and payment details when you place an order or interact with our website. We may also collect non-personal data like IP address, browser type, and cookies.",
  },
  {
    title: "How We Use Your Information",
    text: "We use your information to Process and deliver your ordersCommunicate with you regarding orders and support Improve our website and services Send updates or promotional offers (only if you opt-in).",
  },
  {
    title: "Payment Security",
    text: "All payments are processed securely through trusted third-party payment gateways. We do not store your card or banking details on our servers.",
  },
  {
    title: "Cookies",
    text: "We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic.",
  },
  {
    title: "Data Sharing",
    text: "We do not sell or rent your personal information. Your data may be shared only with trusted partners such as payment processors, delivery services, or legal authorities if required.",
  },
  {
    title: "Data Protection",
    text: "We implement industry-standard security measures to protect your personal information from unauthorized access or misuse.",
  },
  {
    title: "Your Rights",
    text: "You have the right to access update or delete your personal information You can contact us anytime for such requests",
  },
  {
    title: "Changes to This Policy",
    text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
  },
  {
    title: "Contact Us",
    text: "If you have any questions regarding this Privacy Policy, please contact us at Email: ss.enterprises11900@gmail.com",
  },

];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
           PRIVACY POlICY
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase text-slate-900 sm:text-4xl">
            Privacy Policy - SSS Clothing
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">
           This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
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
