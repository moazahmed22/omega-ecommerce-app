// Brand type
interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

// Category type
interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

// Subcategory type
interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

// Product type (wishlist item)
export interface WishlistProduct {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number; // optional (not always present)
  availableColors?: string[]; // optional (sometimes missing)
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

// Wishlist response type
export interface WishlistResponse {
  status: string;
  count: number;
  data: WishlistProduct[];
}
