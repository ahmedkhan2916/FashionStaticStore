import { CartProvider } from "./context/cartContext.js";
import Cart from "./pages/Cart.js";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import Payment from "./pages/Payment.js";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Terms from "./pages/Terms.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import RefundPolicy from "./pages/ReturnsRefundPolicy.js";
import ProductsCollectionPage from "./pages/productsCollectionPage.js";


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/products-coll/:collection" element={<ProductsCollectionPage/>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
