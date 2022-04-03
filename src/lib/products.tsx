import axios from "axios";

export async function loadProducts() {
  const res = await axios.get(
    // "http://proxy-patronageapi.bsolutions.usermd.net/api/products/getAllProductsExternal"
    'http://localhost:40286/api/products/getAllProductsExternal'
  );
  const data = await res.data;

  return data;
}

export async function loadProductDetails(productId: any) {
  const res = await axios.get(
    // `http://proxy-patronageapi.bsolutions.usermd.net/api/products/external/${productId}`
    `http://localhost:40286/api/products/external/${productId}`
  );
  const data = await res.data;

  return data;
}
