"use server";
import axios from "axios";

const getData = async (title: string, limit?: number) => {
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/${title}?limit=${limit}`
    );
    return { data: response.data?.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        message: error.response?.status || "data couldn't be fetched",
      };
    }
  }
};

export { getData };
