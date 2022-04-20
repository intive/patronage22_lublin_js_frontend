import axios from "axios";
import { CONSTANTS } from "../types/constants";
import { Product } from "../types/models";

export async function loadProducts() {
  try {
    const res = await axios.get(`${CONSTANTS.URL}/api/products/`);
    const data: Product[] = await res.data;

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}

export async function loadProductDetails(productId: number) {
  try {
    const res = await axios.get(
      `${CONSTANTS.URL}/api/products/external/${productId}/`
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
