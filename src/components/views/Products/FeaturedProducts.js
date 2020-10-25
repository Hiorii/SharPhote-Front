import React, {useContext} from 'react';
import ProductList from './ProductList/ProductList';
import {ProductData} from '../../../data/productsData';
import Loading from '../Loading/Loading';

const FeaturedProducts = () => {
  const {loading,featuredProducts} = useContext(ProductData);
  if(loading){
    <Loading />
  }
  return <ProductList title='featured product' products={featuredProducts} />
};

export default FeaturedProducts;
