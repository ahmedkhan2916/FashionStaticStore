import { useContext, useMemo, useState } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import { CartContext } from "../context/cartContext.js";

export default function Payment() {
  const { checkoutItems } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    street: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  const orderItems = useMemo(() => checkoutItems || [], [checkoutItems]);

  const total = orderItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT SIDE - ADDRESS */}
          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Delivery Details
            </p>

            <h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Shipping Address
            </h1>

            <div className="mt-8 grid gap-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="input"
              />

              <textarea
                name="street"
                placeholder="Street Address"
                value={form.street}
                onChange={handleChange}
                className="input min-h-[100px]"
              />

              <input
                type="text"
                name="area"
                placeholder="Area / Locality"
                value={form.area}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="landmark"
                placeholder="Nearby Landmark"
                value={form.landmark}
                onChange={handleChange}
                className="input"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={form.state}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                className="input"
              />
            </div>

            {/* PAYMENT */}
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center">
              <h2 className="text-xl font-bold text-slate-900">
                Scan QR to Pay
              </h2>

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
              <button className="mt-8 w-full rounded-full bg-red-500 py-3 text-sm font-bold uppercase text-white hover:bg-red-600">
                Confirm Order
              </button>
            </a>
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-slate-900">
              Order Summary
            </h2>

            {orderItems.length === 0 ? (
              <p className="mt-6 text-neutral-500">
                No items selected
              </p>
            ) : (
              <>
                <div className="mt-6 space-y-4">
                  {orderItems.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex justify-between bg-neutral-50 p-4 rounded-xl"
                    >
                      <div>
                        <h3 className="font-bold">{item.name || item.title}</h3>
                        <p className="text-sm text-neutral-500">
                          {item.category}
                        </p>
                      </div>
                      <p className="font-bold">Rs. {item.price}</p>
                    </div>
                  ))}
                </div>

     <div className="mt-6 border-t pt-4 flex justify-between font-bold text-xl">
                  <span>Delivery Charges</span>
                  <span>Rs.50</span>
                </div>





                <div className="mt-6 border-t pt-4 flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>Rs. {total+50}</span>
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