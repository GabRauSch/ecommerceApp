import styles from '../styles/Element/CartItem.module.css'

const CartItem = ()=>{
    return(
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <img src="assets/oculos.png" alt="" />
            </div>
            <div className={styles.cartItemInfo}>
                <div className={styles.itemName}>Oculos Bacana</div>
                <div className={styles.itemPriceUnit}>R$21,00</div>
            </div>
            <div className={styles.quantity}>
                <div className={styles.quantitySwitch}>
                    <div className={styles.switcher}>-</div>
                    <input type="text" className={styles.quanityValue} value={3}/>
                    <div className={styles.switcher}>+</div>
                </div>
                <div className={styles.ItempriceQuantity}>R$34,00</div>
            </div>
            <div className={styles.removeItem}>
                <img src="assets/bin.svg" alt="" />
            </div>
        </div>
    )
}

export default CartItem