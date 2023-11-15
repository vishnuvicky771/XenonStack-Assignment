import { cartActionTypes } from "./cartActionTypes";

const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItem = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const decrementItem = (item) => ({
  type: cartActionTypes.DECREMENT_ITEM_QUANTITY,
  payload: item
});

export const clearCart=()=>({
  type:cartActionTypes.CLEAR_CART
});



export default toggleCartHidden;
