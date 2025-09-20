"use server";
import { getData } from "@/actions/fetchData.action";
import React from "react";
import SearchProductCompResults from "./SearchProductCompResults";
const SearchProductComp = async () => {
  //  fetch all products
  const allProducts = await getData("products");


  return (
    <>
      <SearchProductCompResults products={allProducts?.data} />
    </>
  );
};

export default SearchProductComp;
