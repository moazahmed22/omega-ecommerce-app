"use client";
import { addProductToCart } from "@/actions/cart.action";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "@/actions/wishlist.action";
import { useCart } from "@/app/context/CartContext/CartContext";
import { useWishlist } from "@/app/context/WishlistContext/WishlistContext";
import { Product } from "@/types/product.model";
import { Heart, Minus, Plus, RotateCcw, Truck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { StarRating } from "react-flexible-star-rating";
import toast from "react-hot-toast";

const SingleProductComp = ({ product }: { product: Product }) => {
  // handle wishtliste
  // 1. get all wishlist
  const { wishlistProducts, getWishlistDetails } = useWishlist();
  // 2. get data for the UI
  const wishlistedProducts = wishlistProducts?.data;
  // 3. handle add to wishlist
  const handleAddToWishlist = async (productId: string) => {
    const response = await addProductToWishlist(productId);
    if (response?.data.length === 0) {
      toast.error("you need to login first");
    } else {
      toast.success("product added successfuly to your wishlist");
      await getWishlistDetails();
    }
  };
  // 4. handle remove from wishlist
  const handleRemoveFromWishlist = async (productId: string) => {
    const response = await removeProductFromWishlist(productId);
    toast.success("product was removed successfuly from your wishlist");
    await getWishlistDetails();
  };

  // get user cart after adding an item
  const { getCartDetails } = useCart();
  // async function to add product to cart
  const handleAddToCart = async (id: string) => {
    const response = await addProductToCart(id);
    if (response?.data.length === 0) {
      toast.error("you need to login first");
    } else {
      await getCartDetails();
      toast.success("product added to your cart successfuly");
    }
  };
  const [amountToBuy, setAmountToBuy] = useState<number>(1);
  return (
    <>
      <div className="my-10 px-5 md:p-0 grid grid-cols-1 md:grid-cols-3 gap-x-16">
        {/* images */}
        <div className="md:col-span-2 h-[600px] grid grid-cols-4 gap-8">
          <div className="hidden md:flex flex-col gap-4">
            {product?.images?.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="relative w-full h-full border-2 rounded-md hover:border-primary duration-300 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="product image"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center hover:scale-150 duration-300"
                />
              </div>
            ))}
          </div>
          <div className="main-image relative border-2 rounded-md col-span-4 md:col-span-3">
            <Image
              src={product?.imageCover}
              alt="main image"
              className="object-contain object-center"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
          </div>
        </div>
        {/* main content */}
        <div className="content flex flex-col gap-2">
          <h3 className="font-bold capitalize text-2xl">{product?.title}</h3>
          <div className="flex review">
            {" "}
            {/* ratings & availabilty*/}
            <div className="rating-container flex items-center gap-2 font-medium">
              <div className="flex gap-2 items-center ">
                <StarRating
                  isHalfRatingEnabled={true}
                  dimension={6}
                  initialRating={Math.round(product?.ratingsAverage * 2) / 2}
                />
                <p className="text-sm text-slate-600/70">
                  ({product?.ratingsQuantity} Reviews)
                </p>
              </div>
              <span className="text-slate-600/70">|</span>
              <span className="availability capitalize text-green-300 text-sm">
                {product?.sold ? "in stock" : "out of stock"}
              </span>
            </div>
          </div>
          {/* pricing */}
          <div className="pricing">
            <p className="price font-normal uppercase text-2xl tracking-wider">
              egp {product?.price?.toFixed(2)}
            </p>
          </div>
          {/* product details */}
          <div className="product-details">
            <p className="text-sm font-medium leading-5">
              {product?.description}
            </p>
          </div>
          {/* line seperator */}
          <div className="w-full h-0.5 bg-slate-600/40 my-3"></div>
          {/* action section */}
          <div className="action-container flex gap-3">
            {/* quatity to buy */}
            <div className="w-fit rounded-sm overflow-hidden flex">
              <button
                className="p-2.5 flex justify-center items-center bg-transparent border-2 border-e-0 border-foreground/25 cursor-pointer"
                onClick={() =>
                  amountToBuy !== 0 && setAmountToBuy(amountToBuy - 1)
                }
              >
                <Minus />
              </button>
              <input
                type="text"
                className="text-center align-middle w-20 font-semibold border-2 border-e-0 text-xl border-foreground/25"
                value={amountToBuy}
                readOnly
                min={1}
                max={product?.quantity}
              />
              <button
                className="p-2.5 flex justify-center items-center bg-primary text-background border-2 border-primary cursor-pointer"
                onClick={() =>
                  amountToBuy !== product?.quantity &&
                  setAmountToBuy(amountToBuy + 1)
                }
              >
                <Plus />
              </button>
            </div>
            {/* buy now */}
            <div
              onClick={() => {
                handleAddToCart(product?._id);
              }}
              className="flex-1 bg-primary font-medium flex justify-center items-center rounded-md text-white capitalize cursor-pointer"
            >
              <span>buy now</span>
            </div>
            {/* add to wishlist */}
            {wishlistedProducts?.some((wishlisted) =>
              wishlisted._id.includes(product._id)
            ) ? (
              <div
                onClick={() => {
                  handleRemoveFromWishlist(product._id);
                }}
                className="p-3 font-medium text-center bg-background border-2 border-foreground/25 rounded-md text-white capitalize cursor-pointer"
              >
                <Heart className="fill-red-500 text-red-500" />
              </div>
            ) : (
              <div
                onClick={() => {
                  handleAddToWishlist(product._id);
                }}
                className="p-3 font-medium text-center bg-background border-2 border-foreground/25 rounded-md text-white capitalize cursor-pointer"
              >
                <Heart className="text-foreground" />
              </div>
            )}
            {/* <div className="p-3 font-medium text-center bg-background border-2 border-foreground/25 rounded-md text-white capitalize cursor-pointer">
              <Heart className="text-foreground" />
            </div> */}
          </div>
          {/* info & policies box */}
          <div className="border-2 mt-8 border-slate-600/70 flex flex-col rounded-md">
            <div className="delivery-policy px-4 py-6 flex items-center gap-4 border-b-2 border-slate-600/70">
              {/* icon */}
              <div className="icon-container">
                <Truck />
              </div>
              {/* text */}
              <div className="text-content">
                <p className="font-medium text-base text-foreground capitalize mb-2">
                  free delivery
                </p>
                <p className="font-medium text-xs underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="delivery-policy px-4 py-6 flex items-center gap-4 border-slate-600/70">
              {/* icon */}
              <div className="icon-container">
                <RotateCcw />
              </div>
              {/* text */}
              <div className="text-content">
                <p className="font-medium text-base text-foreground capitalize mb-2">
                  return delivery
                </p>
                <p className="font-medium text-xs">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductComp;
