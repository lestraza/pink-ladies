import React from 'react';
import { useGlobal } from '../../StateStore/StateStore';
import { deleteCartItem } from '../../UserActions/Actions';

function CartItem(props) {
    const { cartItem, decrementAmount, incrementAmount } = props;    


    const countItemTotalPrice = () => {
        return (1 * cartItem.price).toFixed(2)
    }   

    const changeAmount = (sign) => {
        // updateGlobal(item => {
        //     item.quantity = item.quantity + sign
        // })        
    }    

    return (
        <div className="cart__item">
            <img src={cartItem.url} alt={cartItem.name} className='cart__item-preview' />
            <div className='cart__item-info'>{cartItem.name} {cartItem.size}</div>
            <div className='cart__item-price number'>{countItemTotalPrice()}</div>
            <div className="cart__amount amount">
                <span className="amount__change" onClick={() => decrementAmount(cartItem._id)}>-</span>
                <span>{cartItem.amount}</span>
                <span className="amount__change" onClick={() => incrementAmount(cartItem._id)}>+</span>
            </div>

        </div>
    )
}

export default CartItem
