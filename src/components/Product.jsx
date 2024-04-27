import React from 'react';
import { DelProduct } from './DelProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/productSlice';

export const Product = (props) => {
  const { id, price, title, descr, img } = props.data;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch( addToCart({ product: props.data }) );
  };

  const urlNotImg = '/img/not.png';
  
  return (
    <div className="product" data-id={ id }>
      <div className="product__img-block padding-box">
        <img src={ img ? process.env.PUBLIC_URL + img : process.env.PUBLIC_URL + urlNotImg } alt="" className='product__img' />
      </div>

      <h3 className="product__title padding-box">{ title }</h3>

      <p className="product__descr padding-box">{ descr }</p>

      <div className="product__price padding-box">{ price }</div>

      <div className="product__add-cart-block padding-box">
        <button className="btn product__add-cart-btn" onClick={ handleAddToCart }>Add to cart</button>
        
        <DelProduct id={ id } />
      </div>
    </div>
  );
};