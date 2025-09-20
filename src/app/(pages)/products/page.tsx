import { getData } from "@/actions/fetchData.action";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import React from "react";

const Products = async () => {
  const products = await getData("products");
  const categories = await getData("categories");

  return (
    <>
      <section
        id="products-section"
        className="container mx-auto scroll-mt-[104px] px-1 md:px-0"
      >
        <ProductsPage products={products?.data} categories={categories?.data} />
      </section>
    </>
  );
};

export default Products;
