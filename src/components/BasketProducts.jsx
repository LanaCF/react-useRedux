import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/productSlice';

export const BasketProducts = ({ isOpen, onClose }) => {
    const basketItems = useSelector(state => state.products.cartProdsList);
    const dispatch = useDispatch();

    const totalAmount = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleClose = () => {
        onClose();
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    return (
        <div className={ `basket ${ isOpen ? 'active' : 'hidden' }`}>
            <div className="basket__btn-close">
                <button onClick={ handleClose } className='btn-close'>X</button>
            </div>
            
            <div className="basket__products-box">

                {
                    basketItems && basketItems.map(item => (
                        <div key={item.id} className="basket__product">
                            <div className="basket__product-info">
                                <div className="basket__img-box">
                                    <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.title} className='basket__img' />
                                </div>
                                
                                <div className="basket__product-details">
                                    <div>{item.title}</div>

                                    <div>{item.price}</div>
                                </div>
                            </div>

                            <div className="basket__product-quantity">Quantity: { item.quantity }</div>

                            <button onClick={() => handleDecreaseQuantity(item.id)} className="basket__minus">-</button>

                            <button onClick={() => handleIncreaseQuantity(item.id)} className="basket__plus">+</button>

                            <button onClick={() => handleRemoveFromCart(item.id)} className="basket__btn-del">x</button>
                        </div>
                    ))
                }

            </div>

            <div className="total">Total: { totalAmount }</div>
        </div>
    );
};


