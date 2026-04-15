import { useContext, useState } from "react"; // ✅ added useState
import { Link } from "react-router-dom";
import SSS2 from "../assets/ProductImages/SSS2.png";
import { CartContext } from "../context/cartContext.js";

const navItems = ["Summer Collection"];

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false); // ✅ sidebar state

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/95 shadow-[0_6px_24px_rgba(0,0,0,0.05)] backdrop-blur">
        <div className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr] items-center gap-4 px-4 py-2 xl:grid-cols-[1.3fr_auto_1.4fr] xl:px-8">
          
          <div className="flex flex-wrap items-center justify-start gap-4 xl:justify-start">
            <button
              className="grid gap-1 bg-transparent p-0 lg:hidden"
              type="button"
              aria-label="Open menu"
              onClick={() => setIsOpen(true)} // ✅ open sidebar
            >
              <span className="h-0.5 w-8 rounded-full bg-neutral-700" />
              <span className="h-0.5 w-8 rounded-full bg-neutral-700" />
              <span className="h-0.5 w-8 rounded-full bg-neutral-700" />
            </button>

            <nav
              className="hidden flex-wrap items-center justify-center gap-6 lg:flex"
              aria-label="Primary"
            >
              {navItems.map((item, index) => (
                <a
                  key={item}
                  className={`relative text-lg font-extrabold uppercase tracking-[0.03em] sm:text-xl ${
                    index === 0
                      ? "after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:bg-red-500"
                      : ""
                  }`}
                  href="/#"
                  onClick={(event) => event.preventDefault()}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <Link
            className="col-start-2 row-start-1 justify-self-center text-2xl font-black uppercase tracking-[0.04em] text-red-500 sm:text-[1.7rem] xl:col-auto xl:row-auto"
            to="/"
          >
            <img src={SSS2} alt="SSS Clothing Logo" className="h-24 w-auto" />
          </Link>

          <div className="col-span-2 flex flex-wrap items-center justify-center gap-4 xl:col-auto xl:justify-end">
            <div className="flex w-full max-w-[22rem] items-center overflow-hidden rounded-full border border-neutral-700 bg-white">
              <input
                className="min-w-0 flex-1 bg-transparent px-4 py-3 outline-none disabled:cursor-not-allowed"
                type="text"
                placeholder="Search products"
                disabled
              />
              <button
                className="border-l border-black/10 px-4 py-3 font-medium hover:bg-neutral-100 transition"
                type="button"
              >
                Search
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-neutral-500 sm:text-base">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/cart">
                Cart{cart.length > 0 ? ` (${cart.length})` : ""}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ✅ SIDEBAR */}
  {/* ✅ SIDEBAR */}
<div
  className={`fixed top-0 left-0 h-full w-[260px] bg-white z-40 shadow-xl transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="flex items-center justify-between p-4 border-b">
    <h2 className="font-bold text-lg">Menu</h2>
    <button onClick={() => setIsOpen(false)}>✕</button>
  </div>

  <div className="flex flex-col gap-5 p-4 text-base font-semibold text-neutral-700">

    {/* MAIN */}
    <div className="flex flex-col gap-3">
      <p className="text-xs uppercase text-gray-400">Main</p>
      <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
      <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      <Link to="/cart" onClick={() => setIsOpen(false)}>
        Cart{cart.length > 0 ? ` (${cart.length})` : ""}
      </Link>
    </div>

    {/* LEGAL */}
    <div className="flex flex-col gap-3 border-t pt-4">
      <p className="text-xs uppercase text-gray-400">Legal</p>
      <Link to="/privacy" onClick={() => setIsOpen(false)}>
        Privacy Policy
      </Link>
      <Link to="/terms" onClick={() => setIsOpen(false)}>
        Terms & Conditions
      </Link>
      <Link to="/refund" onClick={() => setIsOpen(false)}>
        Returns & Refunds
      </Link>
    </div>
  </div>
</div>
    </>
  );
}