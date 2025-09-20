"use client";
import { getUserWhishlist } from "@/actions/wishlist.action";
import { WishlistResponse } from "@/types/wishlist.model";
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

type WishlistContext = {
  wishlistProducts: WishlistResponse | null;
  getWishlistDetails: () => Promise<void>;
};

export const WishlistContext = createContext<WishlistContext>({
  wishlistProducts: null,
  getWishlistDetails: async () => {},
});

const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlistProducts, setWishlistProducts] = useState(null);

  const getWishlistDetails = async () => {
    const response = await getUserWhishlist();
    setWishlistProducts(response?.data);
  };
  useEffect(() => {
    getWishlistDetails();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlistProducts, getWishlistDetails }}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => {
  const context = useContext(WishlistContext);
  return context;
};

export { WishlistProvider, useWishlist };
