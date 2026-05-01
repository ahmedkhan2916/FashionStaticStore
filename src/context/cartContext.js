import { createContext, useState } from "react";
import { expandCartItems, getCartItemKey } from "../utils/cartUtils.js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => [
      ...currentCart,
      ...expandCartItems(product, quantity),
    ]);
  };

  const removeFromCart = (itemIndex) => {
    setCart((currentCart) =>
      currentCart.filter((_, currentIndex) => currentIndex !== itemIndex)
    );
  };

  const removeCartGroup = (product) => {
    const productKey = getCartItemKey(product);
    setCart((currentCart) =>
      currentCart.filter((item) => getCartItemKey(item) !== productKey)
    );
  };

  const startDirectCheckout = (product, quantity = 1) => {
    setCheckoutItems(expandCartItems(product, quantity));
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
        removeCartGroup,
        checkoutItems,
        startDirectCheckout,
        startCartCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
