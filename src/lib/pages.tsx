import axios from "axios";
import { CONSTANTS } from "../types/constants";
import { Page } from "../types/models";

interface PageDataProps {
  data: Page;
}

interface AllPagesDataProps {
  data: Page[];
}

export async function getPageBySlug(pageSlug: string) {
  try {
    const { data }: PageDataProps = await axios.get(
      `${CONSTANTS.URL}/api/pages/${pageSlug}`
    );
    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}

export async function getPages() {
  try {
    const { data }: AllPagesDataProps = await axios.get(
      `${CONSTANTS.URL}/api/pages`
    );

    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
}
