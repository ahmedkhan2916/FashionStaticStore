
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Green1 from "../assets/ProductImages/green1.jpeg";
import Green2 from "../assets/ProductImages/green2.jpeg";
import Black1 from "../assets/ProductImages/black1.jpeg";
import Black2 from "../assets/ProductImages/black5.jpeg";
import Shirt1 from "../assets/ProductImages/shirt1.jpg";
import Jeans1 from "../assets/ProductImages/jeans.jpg";
import acc1 from "../assets/ProductImages/acc1.jpg";
import tee1 from "../assets/ProductImages/tee5.jpg"

import NewArrivals from "../components/NewArrivals.js";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import reviews from "../components/reviews.js";
// import varsity2 from "../assets/ProductImages/versity.jpg";

const featureItems = [
  { title: "10% Cashback", text: "on app orders" },
  { title: "30 Days Returns", text: "easy exchanges" },
  { title: "Free Shipping", text: "on selected styles" },
];





const categories = [

    {imag: Shirt1, cat: "shirts"},
    {imag: tee1, cat: "t-shirts"},
    {imag: Jeans1, cat: "bottoms"},
    {imag: acc1, cat: "accessories"},
    
];

const curatedCollections = [
  "Old Money",
  "Korean Collection",
  "Office Edit",
];

function PlaceholderMedia({ label, tall = false, dark = false, short = false }) {
  const heightClass = tall ? "min-h-[18rem] lg:min-h-[36rem]" : short ? "min-h-[18rem]" : "min-h-[24rem]";
  const darkClass = dark
    ? "border-white/10 text-white/70 bg-[linear-gradient(135deg,rgba(184,255,67,0.15),rgba(255,255,255,0.03)),repeating-linear-gradient(-45deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]"
    : "border-black/15 text-neutral-500 bg-[linear-gradient(135deg,rgba(0,0,0,0.04),rgba(255,255,255,0.55)),repeating-linear-gradient(-45deg,rgba(255,255,255,0.55),rgba(255,255,255,0.55)_10px,rgba(0,0,0,0.03)_10px,rgba(0,0,0,0.03)_20px)]";

  return (
    <div
      className={`flex w-full items-center justify-center rounded-[1.7rem] border border-dashed px-4 text-center text-xs font-bold uppercase tracking-[0.18em] ${heightClass} ${darkClass}`}
    >
      <span>{label}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6 text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-red-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold uppercase tracking-[0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {

    const Navigate = useNavigate();





const [reviewOffset, setReviewOffset] = useState(0);
const [reviewCardWidth, setReviewCardWidth] = useState(320);
const animationRef = useRef(null);

const reviewGap = 20;
const reviewStep = reviewCardWidth + reviewGap;
const reviewCycleWidth = reviewStep * reviews.length;
const scrollingReviews = [...reviews, ...reviews];



    useEffect(() => {
  const animate = () => {
    setReviewOffset((prev) => {
      const next = prev + 0.4;
      return next >= reviewCycleWidth ? 0 : next;
    });
    animationRef.current = requestAnimationFrame(animate);
  };

  animationRef.current = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationRef.current);
}, [reviewCycleWidth]);


  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-[1600px]">
        <section className="relative px-4 pt-4 sm:px-6 lg:px-8">
     

        

          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full lg:w-[22rem]">
              <img
                src={Green1}
                alt="Green t-shirt"
                className="h-full min-h-[18rem] w-full rounded-[2rem] object-cover shadow-[0_12px_30px_rgba(17,24,39,0.08)] lg:min-h-[36rem]"
              />
            </div>

            <div
              className="flex min-h-[26rem] flex-1 flex-col justify-center rounded-[2rem] bg-cover bg-center bg-no-repeat px-6 py-10 text-white shadow-[0_12px_30px_rgba(17,24,39,0.08)] sm:px-8 lg:min-h-[36rem]"
              style={{
                backgroundImage: `linear-gradient(rgba(42,33,30,0.72), rgba(69,52,45,0.76)), url(${Black1})`,
              }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-red-400">
                Fresh Drop 2026
              </p>
              <h1 className="text-5xl font-black leading-none text-yellow-300 sm:text-7xl lg:text-[7rem]">
                Summer Collection
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={()=>{ Navigate("/product/1")}}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-neutral-900"
                >
                  Explore Shirts
                </button>
               
              </div>
            </div>

            <div className="w-full lg:w-[22rem]">
              <img
                src={Green2}
                alt="Green t-shirt"
                className="h-full min-h-[18rem] w-full rounded-[2rem] object-cover shadow-[0_12px_30px_rgba(17,24,39,0.08)] lg:min-h-[36rem]"
              />
            </div>
          </div>

    
        </section>

        <section className="mx-4 mt-8 rounded-2xl bg-cyan-50 px-5 py-4 sm:mx-6 lg:mx-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
            {featureItems.map((item) => (
              <article key={item.title} className="flex flex-1 items-center gap-4 p-3">
                <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-neutral-900 font-extrabold">
                  {item.title.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-neutral-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pt-10 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trending Now" title="Latest Drops" />

          <div className="grid overflow-hidden rounded-[2rem] bg-neutral-950 text-white shadow-[0_12px_30px_rgba(17,24,39,0.08)] lg:grid-cols-[1.05fr_1fr]">
            <div className="flex min-h-[18rem] flex-col justify-center px-6 py-10 sm:px-10 lg:min-h-[26rem]">
              <p className="mb-3 text-lg uppercase tracking-[0.08em]">
                India&apos;s Only Official
              </p>
              <h3 className="text-4xl font-black uppercase text-lime-300 sm:text-6xl">
                Signature Collection
              </h3>
              <span className="mt-4 text-white/70">
                Use this wide block for your featured campaign image
              </span>
            </div>
             <div className="rounded-none border-0">
              <img src={Black2} alt="Signature collection banner" />
             </div>
          </div>
        </section>

        <section className="px-4 pt-10 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Handpicked" title="New Arrivals" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {NewArrivals.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_30px_rgba(17,24,39,0.08)]"
              >
               
                <div className="rounded-none border-0">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="px-4 pb-5 pt-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-neutral-500">{item.category}</p>
                  <strong className="mt-3 inline-block text-lg font-bold">
                    Rs. {item.price}
                  </strong>
                </div>
                    <button
                 
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-neutral-900 "
                 onClick={() => {
                   // Handle buy now click
                   Navigate(`/product/${item.id}`);
                 }}>
                  Buy Now
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pt-10 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Browse More" title="Categories" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((item) => (
  <article
    key={item.cat
    }
    className="overflow-hidden rounded-3xl bg-white shadow cursor-pointer hover:scale-[1.02] transition"
    onClick={() =>
      Navigate(`/products-coll/${item.cat.toLowerCase().trim()}`)
    }
  >
    <img src={item.imag} alt={item.title} />
    <h3 className="px-5 py-5 text-3xl font-black uppercase">
      {item.cat}
    </h3>
  </article>
))}
          </div>
        </section>

       <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8">
  <SectionHeading eyebrow="Customer Reviews" title="What People Say" />

  <div className="mt-10 overflow-hidden">
    <div
      className="flex gap-5"
      style={{
        transform: `translateX(-${reviewOffset}px)`,
        width: "max-content",
      }}
    >
      {scrollingReviews.map((review, index) => (
        <article
          key={index}
          className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 text-center shadow-sm"
          style={{ width: `${reviewCardWidth}px` }}
        >
          <div className="text-yellow-400 text-lg">★★★★★</div>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            {review.title}
          </h3>

          <p className="mt-3 text-sm text-neutral-600">
            {review.text}
          </p>

          <p className="mt-5 text-sm font-semibold text-neutral-500">
            {review.name}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}
