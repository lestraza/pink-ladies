import React, {useState} from 'react';
import { Fade } from 'react-reveal';


function ItemShop(props) {

    const {item} = props

    const [error, setError] = useState(false)

    const renderSize = () {
        
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

export default ItemShop
