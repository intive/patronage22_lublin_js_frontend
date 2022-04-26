import axios from "axios";
import { CONSTANTS } from "../types/constants";
import { Product } from "../types/models";

interface ProductDataProps {
  data: Product[];
}
interface ProductDetailsProps {
  data: Product;
}

export async function loadProducts() {
  try {
    const { data }: ProductDataProps = await axios.get(
      `${CONSTANTS.URL}/api/products/getAllPublishedProductsExternal`
    );
    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}

export async function loadProductDetails(productId: any) {
  try {
    const { data }: ProductDetailsProps = await axios.get(
      `${CONSTANTS.URL}/api/products/external/${productId}`
    );

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}
