export interface Category {
  id: number;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Page {
  id: number;
  title: string;
  description: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  photos: File[];
  price: number;
}
