
import React from 'react';
import ProductDetail from "../../components/ProductDetail";
import { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from "next";
import { loadProductDetails, loadProducts } from "../../lib/products";
import { mapEntriesSlugToPaths } from '../../lib/utils';
import { ParsedUrlQuery } from 'querystring';
import {Product} from '../../types/models';


interface ProductDetailsPageProps {
  product: Product;
}


const ProductDetailsPage:NextPage<ProductDetailsPageProps>=({product})=>{

  return (
    <section>
      <h2>
        Home {">"} Products{" "}
        <span className="location">
          {" "}
          {">"} {product.title}
        </span>
      </h2>
      <ProductDetail
        title={product.title}
        description={product.description}
        photos={product.photos}
        price={product.price}
      />
    </section>
  );

}
interface Params extends ParsedUrlQuery
  {id: string};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const products = await loadProducts();
  const paths = mapEntriesSlugToPaths(products!);
  // const paths = products && products.map(product => ({ params: { id: `${product.id}` } }));
  
  return {
    paths,
    fallback: false,
  };
};




export const getStaticProps: GetStaticProps <ProductDetailsPageProps,Params> = async (context) => {
  const {id} = context.params;
  const productDetails = await loadProductDetails(id) as Product;
  return {
     props: 
    { product:productDetails}
    , };
}


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

// export const getStaticProps = async (context: { params: { id: any; }; }) => {
//   const id = context.params.id;
//   const res = await fetch(`http://proxy-patronageapi.bsolutions.usermd.net/api/products/${id}`);
//   const product = await res.json();
//   return {
//     props: {selectedProduct:product
//   }
// }}


// export const getStaticPaths = async () => {
//   const res = await fetch('http://proxy-patronageapi.bsolutions.usermd.net/api/products');
//   const products = await res.json();
//   const paths = products.map((product: any) => ({
//     params: { id: `${product.id}` }
//   }))
//   return {
//     paths:paths,
//     fallback: false,
//   }
// }



export default ProductDetailsPage;

