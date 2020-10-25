import React from 'react';
import product from '../Products/ProductList/ProductList.scss';
import global from '../../../styles/global.scss';
import {Link} from 'react-router-dom';

const Product = ({image,title,id,price}) => {
  return (
    <article className={product.product}>
      <div className={product.imgContainer}>
        <img src={image} alt={title} />
        <Link to={`products/${id}`} className={`${global.btn} + ${global.btnPrimary} + ${product.productLink}`}>
          details
        </Link>
      </div>
      <div className={product.productFooter}>
        <p className={product.productTitle}>{title}</p>
        <p className={product.productPrice}>{price} zł</p>
      </div>
    </article>
  );
};

export default Product;
