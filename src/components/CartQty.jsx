import React from 'react';
import { useSelector } from 'react-redux';

export const CartQty = () => {
    const cartList = useSelector(state => state.products.cartProdsList);

    const totalQuantity = cartList.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="cart">{totalQuantity}</div>
        </>
    );
};


