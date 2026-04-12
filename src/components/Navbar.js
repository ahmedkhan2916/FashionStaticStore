import { useContext } from "react";
import { Link } from "react-router-dom";
import SSS2 from  "../assets/ProductImages/SSS2.png";
import { CartContext } from "../context/cartContext.js";

const navItems = ["Summer Collection"];

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/95 shadow-[0_6px_24px_rgba(0,0,0,0.05)] backdrop-blur">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr] items-center gap-4 px-4 py-2 xl:grid-cols-[1.3fr_auto_1.4fr] xl:px-8">
        <div className="flex flex-wrap items-center justify-start gap-4 xl:justify-start">
          <button
            className="grid gap-1 bg-transparent p-0 lg:hidden"
            type="button"
            aria-label="Open menu"
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
              className="min-w-0 flex-1 bg-transparent px-4 py-3 outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
            <button
              className="border-l border-black/10 px-4 py-3 font-medium"
              type="button"
              aria-label="Search"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-neutral-500 sm:text-base">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart{cart.length > 0 ? ` (${cart.length})` : ""}</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
