import React, { useState } from 'react';
import styles from '../styles/Interact/OrderBy.module.css'

const OrderBy = () => {
  return (
    <div className={styles.listOrder}>
        <div className={styles.listOrderText}>Ultímos itens</div>
        <div className={styles.listOrderPointers}>
            <div className={styles.listOrderPointer}>▲</div>
            <div className={styles.listOrderPointer}>▼</div>
        </div>
    </div>
  );
};

export default OrderBy;
