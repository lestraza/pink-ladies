import React, { useEffect, useState } from 'react';
import { useGlobal } from '../../StateStore/StateStore';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import AdressForm from './AdressForm';

import { getCartItems, addToCart, deleteCartItem } from '../../UserActions/Actions';

const Cart = () => {
    const [globalState, globalActions] = useGlobal();
    const { updateItemsInCart } = globalActions;
    const { prodsInCart } = globalState;

    const [normalizedProds, setNrmProds] = useState([])

    useEffect(() => {


        const nProds = []

        prodsInCart.forEach(prod => {
            const hasProd = nProds.some(nProd => nProd._id === prod._id)

            if (!hasProd) {
                const newProd = { ...prod, amount: 1 }
                nProds.push(newProd)
            } else {
                const cartProd = nProds.find(nProd => nProd._id === prod._id)
                cartProd.amount++
            }
        })

        setNrmProds(nProds)

    }, [prodsInCart])

    const getItems = () => {
        getCartItems()
            .then(response => {
                updateItemsInCart(response.data);
            })
            .catch(err => {
                console.error(err);
            })
    }


    const decrementAmount = (id) => {

        deleteCartItem(id).then(() => {
            getItems()
        })


    }

    const incrementAmount = (id) => {
        addToCart(id).then(() => {
            getItems()
        })
    }

    const countTotalPrice = () => {

        return prodsInCart.reduce((acc, item) => {
            return acc = acc + item.price
        }, 0)
    }

    const renderCartItems = () => {
        return normalizedProds.sort().map((item, i) => {
            return <CartItem cartItem={item} key={i} decrementAmount={decrementAmount} incrementAmount={incrementAmount} />
        })
    }
    return (
        <div className='wrapper wrapper--cart'>
            {
                prodsInCart.length > 0 ? (
                    <>
                        <div className="cart__contaner" >
                            {renderCartItems()}
                        </div>
                       
                        <footer className='cart__footer'>
                            <div className='cart__total-price'>
                                TOTAL $
                                <div className='number'>
                                    {countTotalPrice().toFixed(2)}
                                </div>
                            </div>
                            <Link to='/adress_form' >
                                <button type='submit' className='prim-button prim-button--footer'>PROCEED</button>
                            </Link>
                        </footer>
                    </>
                )
                    : (
                        <div>Your cart is empty</div>
                    )
            }
        </div>
    )

}

export default Cart
