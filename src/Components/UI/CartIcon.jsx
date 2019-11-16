import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartIcon extends Component {
    state = {
        cartItems: [],
    }

    addProductsToCart = (product) => {
        const copyCartItems = [...this.state.cartItems, product];

        this.setState({
            cartItems: copyCartItems
        })

    }
    countProductsInCart = () => {
        const { cartItems } = this.state;
        return cartItems.reduce((acc, item) => {
            return acc + item.amount;
        }, 0)
    }
    render() {
        return (
            <Link to='/cart'>
                <div className="shop__cart">
                    <div className="shop__cart-amount">{this.countProductsInCart()}</div>
                </div>
            </Link>
        )
    }
}
