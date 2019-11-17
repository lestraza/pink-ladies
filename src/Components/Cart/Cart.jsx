import React, { useState } from 'react';
import { useGlobal } from '../../StateStore/StateStore';
import CartItem from './CartItem';
import AdressForm from './AdressForm';

const Cart = () => {
    const [globalState] = useGlobal();
    const { prods } = globalState;


    const countTotalPrice = () => {
        return prods.reduce((acc, item) => {
            return acc + (item.price *item.amount)
        }, 0)
    }

    const renderCartItems = () => {
        return prods.map((item, i) => {
            return <CartItem cartItem={item} key={i} />
        })
    }
    return (
        <div className='wrapper'>
            <div className="cart__contaner">
                {renderCartItems()}
            </div>
            <div className='cart__total-price'>
                TOTAL $
                <div className='number'>
                    {countTotalPrice().toFixed(2)}
                </div>
            </div>
            <AdressForm />
        </div>
    )

}

export default Cart
