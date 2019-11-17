import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobal } from '../../StateStore/StateStore';

export const CartIcon = () => {
   
    const [globalState] = useGlobal();	
 
    
    const countProductsInCart = () => {
        return globalState.prods.reduce((acc, item) => {
            return acc + item.amount;
        }, 0)
    }
 
        return (
            <Link to='/cart'>
                <div className="shop__cart">
                    <div className="shop__cart-amount">{countProductsInCart()}</div>
                </div>
            </Link>
        )
    
}
