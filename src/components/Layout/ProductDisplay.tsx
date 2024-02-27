import React from 'react';
import Product from '../Element/Product';
import styles from '../styles/Layout/ProductDisplay.module.css'
import { Product as ProductType } from '../../types/Product';

type Props = {
  products: ProductType[]
}

const ProductDisplay = ({products}:Props) => {


  return (
    <section className="container" id={styles.mostViewed}>
        <Product image="capricornio.png" title="Caneca super legal" discountPrice="500,00" originalPrice="750,00"/>
    </section>
  );
};

export default ProductDisplay;
