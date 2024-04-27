import React from 'react';
import { Product } from './Product';
import { useSelector } from 'react-redux';

export const Products = () => {
  const prodsList = useSelector(state => state.products.prodsList);

  return (
    <div className="products">
      <h2 className="products__title">Shop</h2>
      <hr />
      <div className="products__list">

        {
          prodsList.map( prod => <Product key={ prod.id } data={ prod }/> )
        }

      </div>
    </div>
  );
};
