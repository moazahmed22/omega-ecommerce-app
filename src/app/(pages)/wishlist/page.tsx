"use client";
import { useWishlist } from "@/app/context/WishlistContext/WishlistContext";
import ProductsShoppingSection from "@/components/ShoppingSectionComp/ProductsShoppingSectionComp";
import React from "react";

const Wishlist = () => {
  const { wishlistProducts } = useWishlist();
  const displayedProducts = wishlistProducts?.data ?? [];

  return (
    <>
      <section
        id="products-section"
        className="container mx-auto scroll-mt-[104px] px-1 my-20 md:px-0"
      >
        <ProductsShoppingSection
          sectionTitle="wishlist"
          sectionData={displayedProducts}
          viewAll={false}
        />
      </section>
    </>
  );
};

export default Wishlist;
