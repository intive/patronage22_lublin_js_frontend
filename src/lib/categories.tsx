import axios from "axios";
import { CONSTANTS } from "../types/constants";
import { Category } from "../types/models";

interface CategoryDataProps {
  data: Category[];
}
interface CategoryDetailsProps {
  data: Category;
}

export async function getCategories() {
  try {
    const { data }: CategoryDataProps = await axios.get(
      `${CONSTANTS.URL}/api/categories`
    );

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
    const { data }: CategoryDetailsProps = await axios.get(
      `${CONSTANTS.URL}/api/categories/${categoryId}`
    );

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}
