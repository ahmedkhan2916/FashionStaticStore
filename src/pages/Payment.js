import { useContext, useMemo, useState } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import { CartContext } from "../context/cartContext.js";

export default function Payment() {
  const [address, setAddress] = useState("");
  const { checkoutItems } = useContext(CartContext);
  const orderItems = useMemo(() => checkoutItems || [], [checkoutItems]);
  const total = orderItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Payment
            </p>
            <h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Enter Address
            </h1>

            <textarea
              className="mt-8 min-h-[180px] w-full rounded-2xl border border-neutral-300 px-4 py-4 outline-none transition focus:border-red-400"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center">
              <h2 className="text-xl font-bold text-slate-900">Scan QR to Pay</h2>
              <img
                src="https://via.placeholder.com/200"
                alt="QR"
                className="mx-auto mt-5 rounded-xl"
              />
              <p className="mt-4 text-sm text-neutral-600">
                Send screenshot on WhatsApp after payment
              </p>
            </div>

            <a href="https://web.whatsapp.com/">
              <button
                type="button"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-600"
              >
                Confirm Order
              </button>
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-slate-900">Order Summary</h2>

            {orderItems.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-10 text-center">
                <p className="font-semibold text-neutral-500">
                  No product selected for payment yet.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-8 space-y-4">
                  {orderItems.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                        <p className="text-sm text-neutral-500">
                          {item.category || "Product"}
                        </p>
                        {item.size ? (
                          <p className="text-sm text-neutral-500">Size: {item.size}</p>
                        ) : null}
                      </div>
                      <p className="text-lg font-bold text-slate-900">
                        Rs. {item.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-neutral-200 pt-5">
                  <div className="flex items-center justify-between text-lg font-semibold text-neutral-600">
                    <span>Total Items</span>
                    <span>{orderItems.length}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-2xl font-black text-slate-900">
                    <span>Total Amount</span>
                    <span>Rs. {total}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
