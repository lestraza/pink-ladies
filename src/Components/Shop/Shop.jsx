import React, { Component } from 'react';
import goods from '../../data/goods';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import ItemShop from './ItemShop';
import { withStore } from '../HOC/withData';


class Shop extends Component {

    state = {
        cartItems: [],
    }

    addProductsToCart = (product) => {
        const copyCartItems = [...this.state.cartItems, product];

        this.setState({
            cartItems: copyCartItems
        })
        this.props.store.dispatch(copyCartItems)

    }
    countProductsInCart = () => {
        const { cartItems } = this.state;
        return cartItems.reduce((acc, item) => {
            return acc + item.amount;
        }, 0)
    }

    renderItemShop = (type) => {
        const filteredItems = goods.filter(item => {
            return item.type === type
        })

        return filteredItems.map((item, i) => {
            return <ItemShop item={item} key={i} addProductsToCart={this.addProductsToCart} />
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <div className='shop'>
                    <h1>MERCH AND ACCESSORIES</h1>
                    <Link to='/cart'>
                        <div className="shop__cart">
                            <div className="shop__cart-amount">{this.countProductsInCart()}</div>
                        </div>
                    </Link>
                    <Fade>
                        <h2>T-SHIRTS</h2>
                        <div className="shop__row">
                            {this.renderItemShop("t-shirts")}
                        </div>
                    </Fade>
                    <Fade>
                        <h2>HOODIES</h2>
                        <div className="shop__row">
                            {this.renderItemShop("hoodies")}
                        </div>
                    </Fade>
                    <Fade>
                        <h2>HATS</h2>
                        <div className="shop__row">
                            {this.renderItemShop("hats")}
                        </div>
                    </Fade>

                </div>
            </div>
        )
    }
}

export default withStore(Shop)