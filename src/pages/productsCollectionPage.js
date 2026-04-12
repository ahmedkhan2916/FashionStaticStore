import { useParams } from "react-router-dom";
import {products} from "../components/productscollection.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function ProductsCollectionPage() {
  const { collection } = useParams();

const filteredProducts = products.filter((item) => {
  const itemCategory = item?.category?.toLowerCase().trim();
  const urlCategory = collection?.toLowerCase().trim();

  return itemCategory === urlCategory;
});

  return (

    <>
<Navbar/>

<div className="min-h-screen px-4 pt-10 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-black uppercase mb-8">
    {collection} Collection
  </h1>

  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
    {filteredProducts.map((product) => (
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
          <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-neutral-800 transition">
            Add to Cart
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