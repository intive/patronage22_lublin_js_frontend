import axios from "axios";
import { CONSTANTS } from "../types/constants";
import { Category } from "../types/models";

export async function loadCategories() {
  try {
    const res = await axios.get(`${CONSTANTS.URL}/api/categories`);
    const data: Category[] = await res.data;

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}

export async function loadCategoryDetails(categoryId: any) {
  try {
    const res = await axios.get(
      `${CONSTANTS.URL}/api/categories/${categoryId}`
    );
    const data: Category = await res.data;

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}
