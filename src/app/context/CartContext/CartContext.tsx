"use client";
import { getUserCart } from "@/actions/cart.action";
import { CartResponse } from "@/types/cart.model";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartContext = {
  cartDetails: CartResponse | null;
  getCartDetails: () => Promise<void>;
};

const CartContext = createContext<CartContext>({
  cartDetails: null,
  getCartDetails: async () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartDetails, setCartDetails] = useState(null);

  const getCartDetails = async () => {
    const response = await getUserCart();
    setCartDetails(response?.data);
  };

  useEffect(() => {
    getCartDetails();
  }, []);
  return (
    <CartContext.Provider value={{ cartDetails, getCartDetails }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook 'useCart'
const useCart = () => {
  const myContext = useContext(CartContext);
  return myContext;
};

export { CartProvider, useCart };
