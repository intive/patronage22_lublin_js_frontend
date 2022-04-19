import axios from "axios";

export async function loadCategories() {
  const res = await axios.get(
    "http://proxy-patronageapi.bsolutions.usermd.net/api/categories"
    // 'http://localhost:40286/api/products/getAllProductsExternal'
  );
  const data = await res.data;

  return data;
}

export async function loadCategoryDetails(categoryId: any) {
  const res = await axios.get(
    `http://proxy-patronageapi.bsolutions.usermd.net/api/categories/${categoryId}`
    // `http://localhost:40286/api/products/external/${productId}`
  );
  const data = await res.data;

  return data;
}
