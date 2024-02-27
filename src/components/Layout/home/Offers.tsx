import React from 'react';
import OfferItem from '../../Element/OfferItem';
import styles from '../../styles/Layout/home/Offers.module.css'

const Offers: React.FC = () => {
  return (
    <section className="container" id={styles.offers}>
        <div className={styles.offersInfoArea}>
            <div className={styles.offersInfo}>
                <div className={styles.offersTitle}>Promoção</div>
                <div className={styles.offersSubTitle}>Canecas de signo</div>
                <div className={styles.offerRemainingTime}>15:00:00</div>
            </div>
        </div>
        <div className={styles.offerItems}>
            <OfferItem image="capricornio.png" text="Caneca Capricórnio"/>
            <OfferItem image="libra.png" text="Caneca Libras"/>
            <OfferItem image="peixes.png" text="Caneca Peixes"/>
            <OfferItem image="touro.png" text="Caneca Touro"/>
        </div>
    </section>
  );
};

export default Offers;
