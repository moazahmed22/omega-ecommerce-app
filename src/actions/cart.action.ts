"use server";
import { getUserToken } from "@/lib/token.util";
import axios from "axios";

// get user cart
const getUserCart = async () => {
  const token = await getUserToken();
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { headers: { token: token as string } }
    );

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

// add product to cart
const addProductToCart = async (productId: string) => {
  const token = await getUserToken();
  try {
    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId },
      { headers: { token: token as string } }
    );
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

// update cart item quantity
const updateProductQuantity = async (productId: string, count: number) => {
  const token = await getUserToken();
  try {
    const response = await axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count },
      { headers: { token: token as string } }
    );
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

// remove specific cart item
const removeProductFromCart = async (productId: string) => {
  const token = await getUserToken();
  try {
    const response = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { headers: { token: token as string } }
    );
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

export {
  getUserCart,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
};
