import React from 'react';
import styles from '../styles/Interact/PaymentMethod.module.css'

type Props = {
  title: string,
  description: string,
  image: string
}

const PaymentMethod = ({title, description, image}: Props) => {
  return (    
    <div className={styles.buyChoiceOption}>
        <div className={styles.optionTitle}>
            <input type="radio" />
            <div className={styles.buyOptionHeaderPayment}>
                <div className={styles.buyOptionImage}>
                    <img src={`assets/${image}`} alt="" />
                </div>
                <div className={styles.buyOptionPaymentInfo}>
                    <div className={styles.buyOptionTitle}>{title}</div>
                    <div className={styles.buyOptionDescription}>{description}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PaymentMethod;
