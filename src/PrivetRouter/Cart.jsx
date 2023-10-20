import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCardDetails from './CartCardDetails';

const Cart = () => {
    const products = useLoaderData();
    return (
        <div className='min-h-screen w-11/12 mx-auto mb-20'>
            <h1 className='text-3xl font-bold text-center mt-16 mb-10' >Add Product Items: {products.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-4" >
              {
                products.map(item => <CartCardDetails key={item._id} item={item} ></CartCardDetails>)
              }
            </div>
        </div>
    );
};

export default Cart;