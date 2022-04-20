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
  price: number;
  status: string;
  quantity: number;
  description: string;
  categoryId: number;
  published: boolean;
  photos?: Array<Photo>;
  createdAt?: string;
  updatedAt?: string;
}

export interface Photo {
  id: number;
  product_id: number;
  url: string;
  active: boolean;
  main_photo: boolean;
  createdAt?: string;
  updatedAt?: string;
}
