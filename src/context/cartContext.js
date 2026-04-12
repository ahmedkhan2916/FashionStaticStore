import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (itemIndex) => {
    setCart((currentCart) =>
      currentCart.filter((_, currentIndex) => currentIndex !== itemIndex)
    );
  };

  const startDirectCheckout = (product) => {
    setCheckoutItems([product]);
  };

  const startCartCheckout = () => {
    setCheckoutItems(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        checkoutItems,
        startDirectCheckout,
        startCartCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
