import axios from "axios";

const getSingleProduct = async (id: string) => {
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
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

export { getSingleProduct };
