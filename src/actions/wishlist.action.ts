"use server";
import { getUserToken } from "@/lib/token.util";
import axios from "axios";

// get user wishlist
const getUserWhishlist = async () => {
  const token = await getUserToken();
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      { headers: { token: token as string } }
    );

    return { data: response?.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        message: error.response?.data?.message || "data couldn't be fetched",
      };
    }
  }
};

// add product to wishlist
const addProductToWishlist = async (productId: string) => {
  const token = await getUserToken();
  try {
    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      { productId },
      { headers: { token: token as string } }
    );
    return { data: response?.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        message: error?.response?.data?.message || "data couldn't be fetched",
      };
    }
  }
};

// remove specific wishlist item
const removeProductFromWishlist = async (productId: string) => {
  const token = await getUserToken();
  try {
    const response = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      { headers: { token: token as string } }
    );
    console.log(response);

    return { data: response?.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        message: error.response?.data.message || "data couldn't be fetched",
      };
    }
  }
};

export { getUserWhishlist, addProductToWishlist, removeProductFromWishlist };
