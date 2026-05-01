import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import { CartContext } from "../context/cartContext.js";
import { groupCartItems } from "../utils/cartUtils.js";

export default function Cart() {
  const { cart, removeCartGroup, startCartCheckout } = useContext(CartContext);
  const navigate = useNavigate();
  const groupedCart = groupCartItems(cart);

 const total = groupedCart.reduce(
  (sum, item) => sum + Number(item.totalPrice),
  0
);

  const handleProceedToPayment = () => {
    startCartCheckout();
    navigate("/pay");
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Your Cart
          </p>
          <h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Order Summary
          </h1>

          {cart.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12 text-center">
              <p className="text-lg font-semibold text-neutral-500">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-8 space-y-4">
                {groupedCart.map((item) => (
                  <div
                    key={item.key}
                    className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center justify-between gap-4 sm:flex-1">
                      <div>
                        <h2 className="text-lg font-bold text-slate-900">
                          {item.name}
                          {item.quantity > 1 ? ` (x${item.quantity})` : ""}
                        </h2>
                        <p className="text-sm text-neutral-500">
                          {item.category || "Product"}
                        </p>
                        {item.size ? (
                          <p className="text-sm text-neutral-500">Size: {item.size}</p>
                        ) : null}
                      </div>
                      <p className="text-lg font-bold text-slate-900">
                        Rs. {item.totalPrice}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCartGroup(item)}
                      className="inline-flex min-h-10 items-center justify-center rounded-full border border-red-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-red-500 transition hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-neutral-200 bg-white px-5 py-5">
                <div className="flex items-center justify-between text-lg font-semibold text-neutral-600">
                  <span>Total Items</span>
                  <span>{cart.length}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-2xl font-black text-slate-900">
                  <span>Total Amount</span>
                  <span>Rs. {total}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleProceedToPayment}
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-600"
              >
                Proceed To Payment
              </button>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
