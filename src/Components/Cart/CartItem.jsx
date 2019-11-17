import React from 'react';
import goods from '../../data/goods';
import { useGlobal } from '../../StateStore/StateStore';

function CartItem(props) {
    const { cartItem } = props;
    const productFromGoods = goods.find(elem => elem.id === cartItem.id);

    const [globalState, globalActions] = useGlobal();
    const { updateItemsInCart } = globalActions;    
    const globalProductsCopy = [...globalState.prods];

    const countItemTotalPrice = () => {
        return (cartItem.amount * productFromGoods.price).toFixed(2)
    }

    const incrementAmount = () => {
        globalProductsCopy.forEach(globalProd => {
            if(globalProd.id === cartItem.id) {
                globalProd.amount = cartItem.amount +1
            }            
        })

        updateItemsInCart(globalProductsCopy)
    }

    const decrementAmount = () => {
        if(cartItem.amount > 1) {
            globalProductsCopy.forEach(globalProd => {
                if(globalProd.id === cartItem.id) {
                    if(globalProd.size === cartItem.size)
                    globalProd.amount = cartItem.amount -1
                }                
            })
    
            // interface ICartProduct {	
            // 	id: number,
            // 	amount: number,
            // 	size: string,
            // 	price: number
            // }
            updateItemsInCart(globalProductsCopy)
        }
    }

    return (
        <div className="cart__item">
            <img src={productFromGoods.url} alt={productFromGoods.name} className='cart__item-preview' />
            <div className='cart__item-info'>{productFromGoods.name} {cartItem.size}</div>
            <div className='cart__item-price number'>{countItemTotalPrice()}</div>
            <div className="cart__amount amount">
                <span className="amount__change" onClick={() => decrementAmount()}>-</span>
                <span>{cartItem.amount}</span>
                <span className="amount__change" onClick={() => incrementAmount()}>+</span>
            </div>

        </div>
    )
}

export default CartItem
