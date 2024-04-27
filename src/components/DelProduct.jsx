import React from 'react';
import { useDispatch } from 'react-redux';
import { delProduct } from '../store/productSlice';

export const DelProduct = ({ id }) => {
    const dispatch = useDispatch();

    const clickHandlerDel = () => {
        dispatch(delProduct(id));
    }

    return (
        <>
            <button onClick={ clickHandlerDel } className='btn-del'>X</button>
        </>
    );
};


