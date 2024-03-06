import React from 'react';
import Standard from '../Button/Standard';
import styles from '../styles/Layout/BuyProduct.module.css'
import { backendIP, backendPort } from '../../api/Config';
import { Product } from '../../types/Product';

type Props = {
    product: Product
}

const BuyProduct = ({product: {image, name, discountPrice, originalPrice, description}}: Props) => {
  return (
    <section className="container" id={styles.product}>
        <div className={styles.productImage}>
            <img className={styles.productImageOpened} src={`http://${backendIP}:${backendPort}/${image}`} alt="bone" />
            <div className={styles.productImageSelect}>
                <div className={[styles.productImageItem,  styles.activeImage].join(' ')}><img src={`http://${backendIP}:${backendPort}/${image}`} alt="" /></div>
                <div className={styles.productImageItem}><img src="assets/bonetras.png" alt="bonetras" /></div>
            </div>
        </div>
        <div className={styles.productInfo}>
            <div className={styles.productName}>
                <div className={styles.productNameText}>{name}</div>
                <div className={styles.bestChoiceSign}>
                    <img src="/assets/verified.svg" alt="" />
                    Melhor escolha
                </div>
            </div>
            <div className={styles.oficialSign}>Produto oficial</div>
            <div className={styles.productPriceDescription}>
                <s className={styles.productOriginalPrice}>R${originalPrice.toFixed(2).replace('.', ',')}</s>
                <div className={styles.productPrice}>R${discountPrice.toFixed(2).replace('.', ',')}</div>
            </div>
            <div className={styles.productDescription}>{description}</div>
            <div className={styles.productOptions}>
                <div className={styles.productOptionItem}>
                    <img src="assets/delivery.svg" alt="delivery" />
                </div>
                <div className={styles.productOptionItem}>
                    <img src="assets/card.svg" alt="delivery" />
                </div>
                <div className={styles.productOptionItem}>
                    <img src="assets/certified.svg" alt="delivery" />
                </div>
            </div>
            <div className={styles.buyArea}>
                <div className={styles.buyQuantity}>
                    Quantidade: 1 ▾
                </div>
                <div className={styles.buyAreaButtons}>
                    <div className={styles.buyButton}>Comprar</div>
                    <div className={styles.cartButton}>Adicionar ao carrinho</div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BuyProduct;
