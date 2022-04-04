import React, { useState } from "react";
import ProductList from "../../components/ProductList";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import { loadProducts } from "../../lib/products";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import MainButton from "../../components/MainButton";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListProductsView from "../../components/ListProductsView";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import Companies from "../../components/Companies";
import Sort from "../../components/Sort";

const products = [
  {
    id: 1,
    title: "Pierwszy produkt",
    price: 1499.99,
    description: "Opis proiduktu",
    category: "Books",
    photos:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
  {
    id: 2,
    title: "Drugi produkt",
    price: 105.99,
    description: "First Prod",
    category: "Clothing",
    photos:
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80",
  },
  {
    id: 3,
    title: "Trzeci produkt",
    price: 59.99,
    description: "Sec Prod",
    photos:
      "https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80",
  },
  {
    id: 4,
    title: "Pierwszy produkt",
    price: 10229.5,
    description: "Opis proiduktu",
    category: "Jewelery",
    photos:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
  {
    id: 5,
    title: "Drugi produkt",
    price: 5000.99,
    category: "Accessorries",
    description: "First Prod",
    photos:
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80",
  },
  {
    id: 6,
    title: "Trzeci produkt",
    price: 2499.89,
    description: "Sec Prod",
    category: "Furnitures",
    photos:
      "https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80",
  },
];

function ProductsPage() {
  const maxPrice = Math.max.apply(
    Math,
    products.map(function (o) {
      return o.price;
    })
  );
  const minPrice = Math.min.apply(
    Math,
    products.map(function (o) {
      return o.price;
    })
  );

  const [company, setCompany] = useState("");
  const [price, setPrice] = useState<any>(maxPrice);
  const [sortCondition, setSortCondition] = useState("");
  const [isListView, setListView] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<any>(null);

  const categories = [
    "All",
    "Books",
    "Clothing",
    "Furnitures",
    "Accessorries",
    "Jewelery",
  ];

  const handleSliderChange = (event: any, newValue: any) => {
    setPrice(newValue);
  };

  const handleChange = (event: any) => {
    setCompany(event.target.value);
  };

  const handleSortChange = (event: any) => {
    setSortCondition(event.target.value);
  };

  const handleListView = () => {
    setListView(true);
  };

  const handleGridView = () => {
    setListView(false);
  };

  const clearFiltersHandler = () => {
    setPrice(maxPrice);
    setSortCondition("");
    setSearchTerm("");
    setCategory(null);
  };

  if (typeof window === "object") {
    const categoryList = document.querySelectorAll(".category-item");
    categoryList.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      item.addEventListener("click", () => {
        item.classList.add("active");
        if (item.textContent === "All") {
          setCategory(null);
        } else {
          setCategory(item.textContent);
        }
      });
    });
  }

  return (
    <section>
      <h2>
        Home <span className="location"> {">"} Products</span>
      </h2>
      <Box sx={{ marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <SearchBar
              onChange={(event: any) => {
                setSearchTerm(event.target.value);
              }}
            />
            <h4>Category</h4>
            <Categories categories={categories} />
            <h4>Company</h4>
            <Companies onChange={handleChange} value={company} />
            <h4>Price</h4>
            <p style={{ color: "#0056ad" }}>$ {price},00</p>
            <Box sx={{ width: 180 }}>
              <Slider
                value={price}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                min={minPrice}
                max={maxPrice}
                step={100}
              />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <MainButton onClick={clearFiltersHandler}>
                CLEAR FILTERS
              </MainButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                width: "100%",
                marginLeft: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GridViewIcon
                style={{ marginRight: "0.5rem", cursor: "pointer" }}
                onClick={handleGridView}
              />
              <FormatListBulletedIcon
                style={{ marginRight: "0.5rem", cursor: "pointer" }}
                onClick={handleListView}
              />
              <p style={{ marginRight: "0.5rem" }}>
                {products.length} products found
              </p>
              <div
                style={{
                  height: "3px",
                  width: "42%",
                  backgroundColor: "blue",
                  marginRight: "0.5rem",
                }}
              ></div>
              <p style={{ marginRight: "0.5rem" }}>Sort By</p>
              <Sort onChange={handleSortChange} value={sortCondition} />
            </Box>
            <div id="products">
              {!isListView ? (
                <ProductList
                  products={
                    sortCondition === "high-price"
                      ? products
                          .filter((product) => {
                            if (searchTerm === "") {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            } else if (
                              product.title
                                .toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                            ) {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            }
                          })
                          .sort(function (a: any, b: any) {
                            return b.price - a.price;
                          })
                      : products
                          .filter((product) => {
                            if (searchTerm === "") {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            } else if (
                              product.title
                                .toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                            ) {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            }
                          })
                          .sort(function (a: any, b: any) {
                            return a.price - b.price;
                          })
                  }
                />
              ) : (
                <ListProductsView
                  products={
                    sortCondition === "high-price"
                      ? products
                          .filter((product) => {
                            if (searchTerm === "") {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            } else if (
                              product.title
                                .toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                            ) {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            }
                          })
                          .sort(function (a: any, b: any) {
                            return b.price - a.price;
                          })
                      : products
                          .filter((product) => {
                            if (searchTerm === "") {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            } else if (
                              product.title
                                .toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                            ) {
                              return product.price <= price && category
                                ? product.category === category
                                : product.price <= price;
                            }
                          })
                          .sort(function (a: any, b: any) {
                            return a.price - b.price;
                          })
                  }
                />
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

/*
export const getStaticProps: GetStaticProps = async () => {
  const products = await loadProducts();

  return {
    props: {
      products: products.map((product: any) => ({
        title: product.title,
        description: product.description,
        id: product.id,
        photos: product.photos[0].url,
        price: product.price,
      })),
    },
  };
};
*/

export default ProductsPage;
