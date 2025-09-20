import React from "react";
import { getSingleProduct } from "@/actions/product.action";
import SingleProductComp from "@/components/SingleProductComp/SingleProductComp";
import { Product } from "@/types/product.model";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const response = await getSingleProduct(id);
  const product: Product = response?.data;

  return (
    <div className="h-fit container mx-auto px-1 md:px-0">
      <SingleProductComp product={product} />
    </div>
  );
};

export default ProductDetails;
