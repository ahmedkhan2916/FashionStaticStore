import { useParams } from "react-router-dom";
import {products} from "../components/productscollection.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import NewArrivals from "../components/NewArrivals.js";
import NewArrivalsImages from "../components/NewArrivalsImages.js";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { CartContext } from "../context/cartContext.js";
export default function ProductsCollectionPage() {

  const { collection } = useParams();

const galleryImages = products.filter(
  (item) => item.category.toLowerCase() === collection.toLowerCase()
);

  

  const filteredProducts = NewArrivalsImages.filter(
    (pro) => pro.category.toLowerCase() === collection.toLowerCase()
  );

    const { addToCart, startDirectCheckout } = useContext(CartContext);

//  console.log("here is my gallery Images",galleryImages,selectedProduct,products);





// const handleAddToCart = () => {
//   addToCart(product);
// };

  return (

    <>
<Navbar/>

<div className="min-h-screen px-4 pt-10 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-black uppercase mb-8">
    {collection} Collection
  </h1>

  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
    {galleryImages.map((product) => (
      <article
        key={product.id}
        className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_30px_rgba(17,24,39,0.08)] hover:scale-[1.02] transition"
      >
        {/* IMAGE */}
        <div className="rounded-none border-0">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="px-4 pb-5 pt-4">
          <h3 className="text-lg font-bold">{product.name}</h3>

          <p className="mt-1 text-neutral-500 capitalize">
            {product.category}
          </p>

          <strong className="mt-3 inline-block text-lg font-bold">
            ₹{product.price}
          </strong>

          {/* BUTTON */}
            <button
                type="button"
                onClick={() => addToCart(product)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Add To Cart
              </button>
        </div>
      </article>
    ))}
  </div>
</div>

<Footer/>

</>
  );
}