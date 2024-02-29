import React, { useState } from 'react';
import styles from '../styles/Layout/Cart.module.css'
import CartItem from '../Element/CartItem';

type Props = {
  handleToggleCart: ()=>void
}

const Cart = ({handleToggleCart}:Props) => {
  return (
    <div className={styles.cartDisplay}>
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <div className={styles.exitCart} onClick={handleToggleCart}>
            <img src="assets/close-icon.svg" alt="" />
          </div>
          <div className={styles.cartName}>Carrinho (3)</div>
        </div>
        <div className={styles.cartItems}>
          <CartItem />
        </div>
        <div className={styles.total}>
          <div className={styles.totalHeader}>
            <div className={styles.totalDisplay}>
              <div className={styles.totalTitle}>Total</div>
              <div className={styles.totalDescription}> 
                {/*  */}
              </div>
            </div>
            <div className={styles.finalPrice}>R$200,00</div>
          </div>
          <div className={styles.totalButton}>Finalizar Compra</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
