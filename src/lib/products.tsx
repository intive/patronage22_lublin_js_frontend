import axios from "axios";
import { CONSTANTS } from "../types/constants";
import { Product } from "../types/models";


interface ProductsDataProps {
  data: Product[];
}
interface ProductsDetailsProps {
  data: Product;
}

export async function loadProducts() {
  try {
    const {data}:ProductsDataProps= await axios.get(`${CONSTANTS.URL}/api/products`);

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
    const {data}:ProductsDetailsProps = await axios.get(
      `${CONSTANTS.URL}/api/products/${id}`
    );

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}