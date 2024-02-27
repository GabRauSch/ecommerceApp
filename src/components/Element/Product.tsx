import React from 'react';
import Standard from '../Button/Standard';
import styles from '../styles/Element/Product.module.css'

type Props ={
  image: string,
  title: string,
  originalPrice: string,
  discountPrice: string
}

const Product = ({image, title, originalPrice, discountPrice}:Props) => {
  return (
    <div className={styles.product}>
        <div className={styles.productImage}>
            <img src={`assets/${image}`} alt="image" />
        </div>
        <div className={styles.productInfo}>
            <div className={styles.productName}>{title}</div>
            <div className={styles.buyArea}>
                <s className={styles.productOriginalPrice}>R${originalPrice}</s>
                <div className={styles.productPrice}>R${discountPrice}</div>
                <Standard text="Comprar"/>
            </div>
        </div>
    </div>
  );
};

export default Product;
