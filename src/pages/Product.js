import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import { CartContext } from "../context/cartContext.js";
import reviews from "../components/reviews.js";
import NewArrivalsImages from "../components/NewArrivalsImages.js";
import { useParams } from "react-router-dom";





function ReviewStars() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
}

export default function Product() {

       const { id } = useParams();
       const selectedProduct = NewArrivalsImages.find(
  (item) => item.id === Number(id)
  );

       const galleryImages = Array.isArray(selectedProduct?.img)
  ? selectedProduct.img
  : [selectedProduct?.img];



  const { addToCart, startDirectCheckout } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [reviewOffset, setReviewOffset] = useState(0);
  const [reviewCardWidth, setReviewCardWidth] = useState(320);
  const animationFrameRef = useRef(null);
  const sizes = ["M", "L", "XL"];
   



  const baseProduct = {
    name: "Summer Collection Black Tee",
    price: 999,
    category: "Oversized T-Shirt",
    description:
      "A bold everyday tee made for standout casual styling with a comfortable relaxed fit and premium finish.",
  };

  const product = {
    ...selectedProduct,
    size: selectedSize,
  };

  const reviewGap = 20;
  const reviewStep = reviewCardWidth + reviewGap;
  const reviewCycleWidth = reviewStep * reviews.length;
  const scrollingReviews = useMemo(() => [...reviews, ...reviews], []);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    startDirectCheckout(product);
    navigate("/pay");
  };

  const showPreviousReviews = () => {
    setReviewOffset((current) => {
      const nextOffset = current - reviewStep;
      return nextOffset < 0 ? reviewCycleWidth - reviewStep : nextOffset;
    });
  };

  const showNextReviews = () => {
    setReviewOffset((current) => {
      const nextOffset = current + reviewStep;
      return nextOffset >= reviewCycleWidth ? 0 : nextOffset;
    });
  };

  useEffect(() => {
    const updateReviewCardWidth = () => {
      if (window.innerWidth < 640) {
        setReviewCardWidth(280);
      } else if (window.innerWidth < 1024) {
        setReviewCardWidth(300);
      } else {
        setReviewCardWidth(320);
      }
    };

    updateReviewCardWidth();
    window.addEventListener("resize", updateReviewCardWidth);

    return () => window.removeEventListener("resize", updateReviewCardWidth);
  }, []);

  useEffect(() => {
    const animateReviews = () => {
      setReviewOffset((current) => {
        const nextOffset = current + 0.45;
        return nextOffset >= reviewCycleWidth ? 0 : nextOffset;
      });

      animationFrameRef.current = window.requestAnimationFrame(animateReviews);
    };

    animationFrameRef.current = window.requestAnimationFrame(animateReviews);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [reviewCycleWidth]);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 lg:grid-cols-[120px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border-2 bg-white ${
                    selectedImage === image ? "border-red-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product preview ${index + 1}`}
                    className="h-24 w-24 object-cover lg:h-28 lg:w-full"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] bg-white shadow-sm lg:order-2">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-full min-h-[24rem] w-full object-cover lg:min-h-[38rem]"
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <ReviewStars />
              <span className="text-sm text-neutral-500">48 reviews</span>
            </div>

            <p className="mt-5 text-3xl font-black text-slate-900">
              Rs. {product.price}
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-600">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-bold text-slate-900">Select Size</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`inline-flex h-12 min-w-12 items-center justify-center rounded-full border px-5 text-sm font-bold uppercase tracking-[0.12em] transition ${
                      selectedSize === size
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-neutral-300 bg-white text-slate-900 hover:border-slate-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <h2 className="text-lg font-bold text-slate-900">Why you&apos;ll love it</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
                <li>Soft premium fabric for everyday comfort</li>
                <li>Relaxed oversized fit with standout styling</li>
                <li>Easy to pair with jeans, cargos, and shorts</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Add To Cart
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-600"
              >
                Buy It Now
              </button>
            </div>
          </div>
        </section>



        <section className="mt-14 rounded-[2rem] bg-white px-6 py-10 shadow-sm sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Customer Reviews
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Let Customers Speak For Us
            </h2>
            <p className="mt-3 text-base text-neutral-500">
              Real feedback from customers who loved the product.
            </p>
          </div>

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
                  key={`${review.name}-${review.title}-${index}`}
                  className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm"
                  style={{ width: `${reviewCardWidth}px` }}
                >
                  <ReviewStars />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {review.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {review.text}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-neutral-500">
                    {review.name}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={showPreviousReviews}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-xl text-slate-900 transition hover:bg-neutral-100"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={showNextReviews}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-xl text-slate-900 transition hover:bg-neutral-100"
            >
              &#8250;
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
