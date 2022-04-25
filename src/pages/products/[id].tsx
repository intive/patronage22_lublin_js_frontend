
// import React from 'react';
// import ProductDetail from "../../components/ProductDetail";
// import { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from "next";
// import { loadProductDetails, loadProducts } from "../../lib/products";
// import { mapEntriesSlugToPaths } from '../../lib/utils';
// import { ParsedUrlQuery } from 'querystring';
// import {Product} from '../../types/models';


// interface ProductDetailsPageProps {
//   product: Product;
// }


// const ProductDetailsPage:NextPage<ProductDetailsPageProps>=({product})=>{

//   return (
//     <section>
//       <h2>
//         Home {">"} Products{" "}
//         <span className="location">
//           {" "}
//           {">"} {product.title}
//         </span>
//       </h2>
//       <ProductDetail
//         title={product.title}
//         description={product.description}
//         photos={product.photos}
//         price={product.price}
//       />
//     </section>
//   );

// }
// interface Params extends ParsedUrlQuery
//   {id: string};

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const products = await loadProducts();
//   const paths = mapEntriesSlugToPaths(products!);
//   // const paths = products && products.map(product => ({ params: { id: `${product.id}` } }));
  
//   return {
//     paths,
//     fallback: false,
//   };
// };




// export const getStaticProps: GetStaticProps <ProductDetailsPageProps,Params> = async (context) => {
//   const {id} = context.params;
//   const productDetails = await loadProductDetails(id) as Product;
//   return {
//      props: 
//     { product:productDetails}
//     , };
// }


// function ProductDetailsPage(props: { selectedProduct: any; }){
//   const product=props.selectedProduct
//   console.log(product)
//   return (
//     <section>
//       <h2>
//         Home {">"} Products{" "}
//         <span className='location'>
//           {" "}
//           {">"} {product.title}
//         </span>
//       </h2>
//       <ProductDetail
//         title={product.title}
//         description={product.description}
//         photos={product.photos}
//         price={product.price}
//       />
//     </section>
//   );
// }


// export default ProductDetailsPage;

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { loadProducts } from "../../lib/products";
import ProductDetail from "../../components/ProductDetail";

const ProductsDetailsPage: NextPage<{
  title: string;
  description: string;
  photos:string[];
  price:string;
}> = props => {
  return (
          <section>
            <h2>
              Home {">"} Products{" "}
              <span className="location">
                {" "}
                {">"} {props.title}
              </span>
            </h2>
            <ProductDetail
              title={props.title}
              description={props.description}
              photos={props.photos}
              price={props.price}
            />
          </section>
      
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await loadProducts();
  const ids = products!.map(product => `${product.id}`);
  const paths = ids.map(id => ({ params: { id } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const products = await loadProducts();
  const product = products!.find(x => `${x.id}` === id);

  return {
    props: {
      title: product!.title,
      description: product!.description,
      photos:product!.photos,
      price:product!.price,
    }
  };
};

export default ProductsDetailsPage;
