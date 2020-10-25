import React, {useContext} from 'react';
import {ProductData} from '../../../data/productsData';
import Loading from '../Loading/Loading';
import ProductList from './ProductList/ProductList';

const Products = () => {
  const {loading, products} = useContext(ProductData);
  if(loading){
    return <Loading />
  }
  return <ProductList title='our products' products={products}/>
};

export default Products;
