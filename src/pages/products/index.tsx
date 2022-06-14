import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
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
import { SelectChangeEvent } from "@mui/material";
import { getCategories } from "../../lib/categories";
import { Category } from "../../types/models";
import { number } from "yup";


const categoryAll: Category = {
  id: 0,
  title: "All",
  description: "",
  createdAt: "",
  updatedAt: "",
};


function ProductsPage({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const maxPrice = Math.max.apply(
    Math,
    products.map(function (o: any) {

      return o.price;
    })
  );
  const minPrice = Math.min.apply(
    Math,

    products.map(function (o: any) {

      return o.price;
    })
  );

  const [company, setCompany] = useState<string>("");
  const [price, setPrice] = useState<number>(maxPrice);
  const [sortCondition, setSortCondition] = useState<string>("");
  const [isListView, setListView] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoriesList, setCategoriesList] = useState<Category[]>(categories);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [productList, setProductList] = useState(products)

  const handleSliderChange = (event: any, newValue: any) => {
    setPrice(newValue);
    setProductList(products.filter((product: any) => product.price <= newValue))
  };

  const handleCompanyChange = (event: SelectChangeEvent<string>) => {
    setCompany(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent<number | null>) => {
    setCategoryId(event.target.value as number);
    setProductList(event.target.value as number === 0 ? products : products.filter((product: any) => product.categoryId === event.target.value as number))
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortCondition(event.target.value);
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    setProductList(products.filter((product: any) => product.title.toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())))
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
    setCategoryId(0);
    setProductList(products)
  };

  return (
    <section>
      <h2>
        Home <span className="location"> {">"} Products</span>
      </h2>
      <Box sx={{ marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <SearchBar
              onChange={handleSearchChange}
            />
            <h4>Category</h4>
            <Categories
              onChange={handleCategoryChange}
              categoriesList={categoriesList}
              selectedCategory={categoryId}
            />
            <h4>Company</h4>
            <Companies onChange={handleCompanyChange} value={company} />
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
                {productList.length} products found
              </p>
              <div
                style={{
                  height: "3px",
                  width: "42%",
                  backgroundColor: "#0057D8",
                  marginRight: "0.5rem",
                }}
              ></div>
              <p style={{ marginRight: "0.5rem" }}>Sort By</p>
              <Sort onChange={handleSortChange} value={sortCondition} />
            </Box>
            <div id="products">
              {productList.length === 0 ? <p>Nothing was found</p> : !isListView ? (
                <ProductList
                  searchTerm={searchTerm}
                  price={price}
                  categoryId={categoryId}
                  products={
                    sortCondition === "high-price"
                      ? products.sort(function (a: any, b: any) {
                        return b.price - a.price;
                      })
                      : products.sort(function (a: any, b: any) {
                        return a.price - b.price;
                      })
                  }
                />
              ) : (
                <ListProductsView
                  searchTerm={searchTerm}
                  price={price}
                  categoryId={categoryId}
                  products={
                    sortCondition === "high-price"
                      ? products.sort(function (a: any, b: any) {
                        return b.price - a.price;
                      })
                      : products.sort(function (a: any, b: any) {
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

export const getStaticProps: GetStaticProps = async () => {
  const products = await loadProducts();
  const categories = await getCategories();

  return {
    props: {

      products: products?.map((product: any) => ({
        title: product.title,
        description: product.description,
        id: product.id,
        photos: product.photos || null,
        price: product.price,
        categoryId: product.categoryId,
      })) || [],
      categories:
        categories?.map((category: Category) => ({
          id: category.id,
          title: category.title,
          description: category.description,
        })) || [],
    },
  };
};

export default ProductsPage;


