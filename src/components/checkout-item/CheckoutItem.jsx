import React from 'react';
import './CheckoutItem.css';
import { clearItem, addItem, decrementItem } from '../../redux/cart/cartActions';
import { useDispatch } from 'react-redux';

function CheckoutItem({ cartItem}) {
   const dispatch=useDispatch();
   const { imageUrl, name, quantity, price } = cartItem;
   return (
      <div className='checkout-item'>
         <div className='checkout-image'>
            <img src={imageUrl} alt={`${name}`} />
         </div>
         <span className='checkout-field'>{name}</span>
         <span className='checkout-field'>
            <div className='arrow' onClick={() => dispatch(decrementItem(cartItem))} >&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
         </span>
         <span className='checkout-field'>{price}</span>
         <div className='checkout-field remove-symbol' readOnly onClick={() => dispatch(clearItem(cartItem))}>
            &#10005;
         </div>
      </div>
   );
}

export default CheckoutItem;