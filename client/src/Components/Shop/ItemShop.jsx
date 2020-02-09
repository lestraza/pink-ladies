import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { useGlobal } from '../../StateStore/StateStore';
import { addToCart, getCartItems } from '../../UserActions/Actions';

function ItemShop(props) {

    const [globalState, globalActions] = useGlobal();
    const { updateItemsInCart } = globalActions;
    const { prodsInCart } = globalState;

    const { item } = props;

    const [error, setError] = useState(false)
    const [amount, setAmount] = useState(1);
    const [selectedSize, setSize] = useState({
        id: item.sizes[0].id,
        size: 's'
    });

    const selectSize = (size) => {
        setSize(size)
    }

    const decrementAmount = () => {
        if (amount > 1)
            setAmount(amount - 1)
    }

    const incrementAmount = () => {
        setAmount(amount + 1)
    }

    const onClickAddToCart = (productId) => {
        addToCart(productId)
            .then(() => {
                getCartItems().then((response) => {
                    updateItemsInCart(response.data);
                })
            })
    }

    const renderSize = () => {
        return item.sizes.map(sizeItem => {
            const { size, id } = sizeItem;
            return (
                <span key={id}
                    onClick={() => selectSize(sizeItem)}
                    className={selectedSize.size === size ? 'selected' : ''}>
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
                    <span className="amount__change" onClick={decrementAmount}>-</span>
                    <span>{amount}</span>
                    <span className="amount__change" onClick={incrementAmount}>+</span>
                </div>
            </div>
            <div className="prim-button" onClick={() => onClickAddToCart(selectedSize.id)}>ADD TO CART</div>
        </div>
    )
}

export default ItemShop
