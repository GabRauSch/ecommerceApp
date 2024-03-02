import React, { useState } from 'react';
import styles from '../styles/Layout/Cart.module.css'
import CartItem from '../Element/CartItem';
import { setServers } from 'dns';

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
          <div className={styles.cartName}>Carrinho (1)</div>
        </div>
        <div className={styles.cartItems}>
          <CartItem id={1} name="Oculos daora" image="oculos.png" price={30.1} quantity={2}/>
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
