import React from 'react';
import styles from '../styles/Element/OfferItem.module.css'

type Props = {
  image: string,
  text: string
}

const OfferItem = ({image, text}: Props) => {
  return (
    <div className={styles.offerItem}>
        <div className={styles.offerItemImage}>
            <img src={`assets/${image}`} alt="capricornio" />
        </div>
        <div className={styles.offerItemName}>{text}</div>
        <div className={styles.offerItemDiscount}>20%</div>
    </div>
  );
};

export default OfferItem;
