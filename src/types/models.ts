export interface Category {
  id: number;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface Product {
  id: number;
  title: string;
  price: string,
  description: string,
  category: string | null,
  photos: string[],
  url?:any,
}