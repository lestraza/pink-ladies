import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCartItems } from '../../UserActions/Actions';
import { useGlobal } from '../../StateStore/StateStore';

export const CartIcon = () => {

    const [globalState, globalActions] = useGlobal();
    const { prodsInCart } = globalState;
    const { updateItemsInCart } = globalActions;

    useEffect(() => {
        getCartItems().then((res) => {
            updateItemsInCart(res.data)
        })
    }, [])

    return (
        <Link to='/cart' className='cart_link'>
            <div className="shop__cart-amount">{prodsInCart.length}</div>
            <FontAwesomeIcon icon={'shopping-cart'} size={'lg'} />
        </Link>
    )

}
