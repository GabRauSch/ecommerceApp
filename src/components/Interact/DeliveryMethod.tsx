import React from 'react';
import styles from '../styles/Interact/DeliveryMethod.module.css'

type Props = {
  title: string,
  description?: string,
  tax?: string,
  footer?: string,
  input?: boolean,
  free?: boolean,
}

const DeliveryMethod = ({title, description, tax, footer, free}: Props) => {
  return (
    <div className={styles.buyChoiceOption}>
        <div className={styles.optionTitle}>
            <input type="radio" />
            <div className={styles.buyOptionHeader}>
                <div className={styles.buyOptionTitle}>{title}</div>
                <div className={[styles.buyOptionPrice, (free ? styles.buyFree : '') ].join(' ')} >{free ? 'Grátis' : `R$${tax}`}</div>
            </div>
        </div>
        <div className={styles.buyOptionInfo}>
            <div className={styles.buyOptionDesc}>{description}</div>
            <div className={styles.buyOptionDesc}>{footer}</div>
        </div>
    </div>
  );
};

export default DeliveryMethod;
