export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
export type ProductLike = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
