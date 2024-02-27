import React from 'react';
import styles from '../styles/Element/Popular.module.css'
import Standard from '../Button/Standard';

const Popular: React.FC = () => {
  return (
    <div className={styles.asideProduct}>
        <div className={styles.asideProductInfo}>
            <div className={styles.asideProductName}>Luminária Alfredo</div>
            <div>
              <Standard text="Comprar agora"/>
            </div>
        </div>
        <div className={styles.asideProductImageArea}>
            <img src="assets/dart-vader.png" alt="" />
        </div>
    </div>
  );
};

export default Popular;