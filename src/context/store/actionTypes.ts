export interface CartState {
    items: CartItem[],
    total: number
  }
  
  export type CartItem = {
    name: string,
    unitPrice: number,
    amount: number,
    image: string,
  }
  
  export enum ActionTypes {
      ADD_TO_CART = 'ADD_TO_CART',
      REMOVE_FROM_CART = 'REMOVE_FROM_CART',
      CLEAR_CART = 'CLEAR_CART',
    }
    
    interface AddToCartAction {
      type: ActionTypes.ADD_TO_CART;
      payload: { item: CartItem };
    }
    
    interface RemoveFromCartAction {
      type: ActionTypes.REMOVE_FROM_CART;
      payload: { itemId: number };
    }
    
    interface ClearCartAction {
      type: ActionTypes.CLEAR_CART;
    }
    
    export type CartAction =
      | AddToCartAction
      | RemoveFromCartAction
      | ClearCartAction;
    