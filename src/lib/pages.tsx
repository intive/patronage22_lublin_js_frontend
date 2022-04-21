import axios from "axios";
import { CONSTANTS } from "../types/constants";
import { Category, Page } from "../types/models";

interface PageDataProps {
  data: Page;
}

export async function getPageBySlug(pageSlug: string) {
  try {
    const { data }: PageDataProps = await axios.get(
      `${CONSTANTS.URL}/api/pages/slug/${pageSlug}`
    );
    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}
