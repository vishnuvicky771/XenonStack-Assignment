import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './CartIcon.css';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import toggleCartHidden from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const CartIcon = () => {
    const itemCount=useSelector(selectCartItemsCount);
    const dispatch=useDispatch();
    return (
        <div className='cart-icon' onClick={()=>dispatch(toggleCartHidden())}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

export default CartIcon;
