import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { useGlobal } from '../../StateStore/StateStore';

export const ItemShop = (props) => {
    
    const { item } = props;

    const [globalState, globalActions] = useGlobal();
    const { goods } = globalState;
    
    const {isAddedToCart} = item;

    const [error, setErrorState] = useState(false)    
    

    // const decrementAmount = () => {
    //     const prodsCopy = [...goods];
    //     if (addedToCart.amount > 1) {
    //         prodsCopy.forEach(product => {
    //             product.amount = product.amount - 1
    //         })
    //         globalActions.updateItemsInCart(prodsCopy)
    //     }
    // }
    // const incrementAmount = () => {
    //     const prodsCopy = [...goods];
    //         prodsCopy.forEach(product => {
    //             product.amount = product.amount + 1
    //         })
    //         globalActions.updateItemsInCart(prodsCopy)
    // }

   

    // const addToCart = () => {
    //     if (!addedToCart.size) {
    //        setErrorState(true)
    //     } 
    //     if (addedToCart.length && addedToCart.size === selectedSize) {
    //         const prodsCopy = [...goods];
    //         prodsCopy.forEach(product => {
    //             if (product.id === addedToCart.id) {
    //                 product.amount += itemShop.amount
    //             }
    //         })
    //         globalActions.updateItemsInCart(prodsCopy);

    //     } else {
    //         const productToAddToCart = {
    //             id: item.id,
    //             amount: itemShop.amount,
    //             size: itemShop.selectedSize,
    //             price: item.price
    //         }
    //         globalActions.updateItemsInCart(rodsCopy)
    //     }
        

    // }

    const selectSize = (size) => {            
        setSelectedSize(size)            
        setErrorState(false)            
    }

    const renderSize = () => {
        const { sizes, selectedSizes } = props.item;
        
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

    


    return (
        <div className="shop__item">
            <img src={item.url} alt="" className='shop__img' />
            <div className="shop__name">{item.name}</div>
            <div className="shop__price">
                ${item.price}
            </div>
            <div className="shop__details">
                {error && <Fade>
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
            <div className="prim-button" onClick={() => addToCart()}>{!addedToCart.length ? 'Purchase' : 'In your cart'}</div>
        </div>
    )

}
