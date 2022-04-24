import axios from "axios";
import { CONSTANTS } from "../types/constants";

export async function loadProducts() {
  const res = await axios.get(
    `${CONSTANTS.URL}/api/products/getAllPublishedProductsExternal`
  );
  const data = await res.data;

  return data;
}

export async function loadProductDetails(productId: any) {
  const res = await axios.get(
    `${CONSTANTS.URL}/api/products/external/${productId}`
  );
  const data = await res.data;

  return data;
}
