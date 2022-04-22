import axios from "axios";
import { CONSTANTS } from "../constants";


export interface Product {
  id: number;
  title: string;
  price: string,
  description: string,
  category: string | null,
  photos: string[],
  url?:any,
}
export async function loadProducts() {
  try {
    const res = await axios.get(`${CONSTANTS.apiURL}/api/products`);
    const data: Product[] = await res.data;

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}

export async function loadProductDetails(id: string) {
  try {
    const res = await axios.get(
      `${CONSTANTS.apiURL}/api/products/${id}`
    );
    const data: Product = await res.data;

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}