import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            About Us
          </p>

          <h1 className="mt-4 text-3xl font-black uppercase text-slate-900 sm:text-4xl">
            Welcome To SSS Clothing
          </h1>

          <div className="mt-6 space-y-5 text-base leading-8 text-neutral-600">
            <p>
              At SSS Clothing, we believe that what you wear should express who
              you are. That is why we focus on stylish and unique t-shirts that
              help you stand out.
            </p>

            <p>
              Our collection is created to bring fresh, creative, and different
              designs that feel modern and easy to wear. Whether you like bold
              looks, minimal styles, or something eye-catching, we want to offer
              pieces that match your personality.
            </p>

            <p>
              Our mission is simple: to provide high-quality, comfortable, and
              trendy clothing that gives you confidence every time you wear it.
              We care about quality, design, and customer satisfaction in every
              product.
            </p>

            <p>
              Thank you for choosing SSS Clothing. We are happy to be part of
              your style journey.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
