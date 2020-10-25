import React from 'react';
import styles from './ProductList.scss';
import global from '../../../../styles/global.scss'
import Product from '../../Product/Product';

const ProductList = ({title,products}) => {
  return (
    <section className={global.section}>
      <h2 className={global.sectionTitle}>Wyróżnione zdjęcia</h2>
      <div className={styles.productsCenter}>
        {products.map((product)=>{
          return <Product key={product.id} {...product}/>
        })};
      </div>
    </section>
  );
};

export default ProductList;
