import React,{useState, useEffect} from 'react';
import axios from 'axios';
import url from '../utils/URL'
import {featureProducts, flattenProducts} from '../utils/helpers';
import PropTypes from 'prop-types';

export const ProductData = React.createContext();

const ProductsProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [featuredProducts, setFeaturedProducts ] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    setLoading(true);
    axios
      .get(`${url}/products`)
      .then(response => {
        const featured = featureProducts(flattenProducts(response.data));
        const products = flattenProducts(response.data);
        setProducts(products);
        setFeaturedProducts(featured);
        setLoading(false);
      });
    return () => {};
  },[]);

  return (
    <div>
      <ProductData.Provider value={{products, featuredProducts, loading}}>
        {children}
      </ProductData.Provider>
    </div>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProductsProvider;
