import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { useGlobal } from '../../StateStore/StateStore';

export const ItemShop = (props) => {
    const [globalState, globalActions] = useGlobal();
    const { prods } = globalState;
    
    const [ itemShop, updateShopItem] = useState({
		amount: 1,
        selectedSize: '',
        isAddedToCart: false,
        isShowedError: false
	})

    const decrementAmount = () => {
        if (itemShop.amount > 1) {
            updateShopItem({ ...itemShop, amount: itemShop.amount - 1 })
        }
    }
    const incrementAmount = () => {
        updateShopItem({ ...itemShop, amount: itemShop.amount + 1 })
    }
    
    const selectSize = (size) => {
        updateShopItem({ ...itemShop, selectedSize: size, isShowedError: false })
    }

    const addToCart = () => {

        if (!itemShop.selectedSize) {
            updateShopItem({ ...itemShop, isShowedError: true })

        } else {
            updateShopItem({ ...itemShop, isAddedToCart: true })
            const propsItem = {
                id: item.id,
                amount: itemShop.amount,
                size: itemShop.selectedSize,
                price: item.price
            }
            globalActions.updateItemsInCart([...prods, propsItem])
        }

    }

    const renderSize = () => {
        const { sizes } = props.item;
        const { selectedSize } = itemShop;
        return sizes.map((size, i) => {
            return (
                <span key={i}
                    onClick={() => selectSize(size)}
                    className={selectedSize === size ? 'selected' : ''}>
                    {size}
                </span>
            )
        })
    }

    const { item } = props;

    return (
        <div className="shop__item">
            <img src={item.url} alt="" className='shop__img' />
            <div className="shop__name">{item.name}</div>
            <div className="shop__price">
                ${item.price}
            </div>
            <div className="shop__details">
                {itemShop.isShowedError && <Fade>
                    <div className={"shop__size-error"}>
                        Please select your size first
                        </div>
                </Fade>}

                <div className="sizes">
                    {renderSize()}
                </div>
                <div className="amount">
                    <span className="amount__change" onClick={() => decrementAmount()}>-</span>
                    <span>{itemShop.amount}</span>
                    <span className="amount__change" onClick={() => incrementAmount()}>+</span>
                </div>
            </div>
            <div className="prim-button" onClick={() => addToCart()}>{!itemShop.isAddedToCart ? 'Purchase' : 'In your cart'}</div>
        </div>
    )

}
