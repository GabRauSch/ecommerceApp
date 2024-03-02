import { useContext, useEffect, useState } from 'react';
import { ActionTypes } from '../../context/cart/actionsTypes';
import styles from '../styles/Element/CartItem.module.css'
import { CartContext } from '../../context/cart/CartContext';

type Props = {
    id: number,
    image: string,
    name: string,
    price: number,
    quantity: number
}

const CartItem = ({id, image, name, price, quantity}: Props)=>{
    const { dispatch } = useContext(CartContext);
    const [itemQuantity, setQuantity] = useState(quantity);

    useEffect(()=>{

    }, [itemQuantity])

    const lowerQuantity = ()=>{
        if(itemQuantity > 0){
            return setQuantity(itemQuantity - 1)
        }
        setError('Exclua o item para tirá-lo do carrinho')
    }
    const removeItemFromCart = (itemId: number)=>{
        dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: {itemId} });
    }
    return(
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <img src={`assets/${image}`} alt="" />
            </div>
            <div className={styles.cartItemInfo}>
                <div className={styles.itemName}>{name}</div>
                <div className={styles.itemPriceUnit}>R${price.toFixed(2).replace('.', ',')}</div>
            </div>
            <div className={styles.quantity}>
                <div className={styles.quantitySwitch}>
                    <div className={styles.switcher} onClick={lowerQuantity}>-</div>
                    <input type="text" className={styles.quanityValue} value={itemQuantity}/>
                    <div className={styles.switcher} onClick={()=>{setQuantity(itemQuantity + 1)}}>+</div>
                </div>
                <div className={styles.ItempriceQuantity}>R${(price * itemQuantity).toFixed(2).replace('.', ',')}</div>
            </div>
            <div className={styles.removeItem} onClick={()=>{removeItemFromCart(1)}}>
                <img src="assets/bin.svg" alt="" />
            </div>
        </div>
    )
}

export default CartItem