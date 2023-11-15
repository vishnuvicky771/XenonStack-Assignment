export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const clearItemFromCart = (cartItems, clearItem) => {
    return cartItems.filter((cartItem) => {
        return cartItem.id !== clearItem.id
    });
}

export const decrementItemQuantity = (cartItems, clearItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === clearItem.id);
    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, clearItem);
    }
    else {
        return cartItems.map((cartItem) => {
            if (cartItem.id === clearItem.id) {
                return {
                    ...clearItem,
                    quantity: clearItem.quantity - 1
                }
            }
            return cartItem;
        });
    }
}