import React from 'react';
import Standard from '../Button/Standard';
import styles from '../styles/Layout/BuyProduct.module.css'

const BuyProduct: React.FC = () => {
  return (
    <section className="container" id={styles.product}>
        <div className={styles.productImage}>
            <img className={styles.productImageOpened} src="assets/bone.png" alt="bone" />
            <div className={styles.productImageSelect}>
                <div className={[styles.productImageItem,  styles.activeImage].join(' ')}><img src="assets/bone.png" alt="" /></div>
                <div className={styles.productImageItem}><img src="assets/bonetras.png" alt="bonetras" /></div>
            </div>
        </div>
        <div className={styles.productInfo}>
            <div className={styles.productName}>
                <div className={styles.productNameText}>Bone super legal</div>
                <div className={styles.bestChoiceSign}>
                    <img src="assests/verified.svg" alt="" />
                    Melhor escolha
                </div>
            </div>
            <div className={styles.oficialSign}>Produto oficial</div>
            <div className={styles.productPriceDescription}>
                <s className={styles.productOriginalPrice}>R$800,00</s>
                <div className={styles.productPrice}>R$750,00</div>
            </div>
            <div className={styles.productDescription}>Bone super legal e super bem feito. Produzido à mão pela equipe mais incrível de todo o planeta, personalizável, feito como você quiser, feito para você. Eu amo você. Eu amo sua mãe, sua mãe é linda</div>
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
