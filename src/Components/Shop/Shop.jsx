import React, { Component } from 'react';
import goods from '../../data/goods';
import { Fade } from 'react-reveal';
import { ItemShop } from './ItemShop';


class Shop extends Component {

    renderItemShop = (type) => {
        const filteredItems = goods.filter(item => {
            return item.type === type
        })

        return filteredItems.map((item, i) => {
            return <ItemShop item={item} key={i} />
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <div className='shop'>
                    <h1>MERCH AND ACCESSORIES</h1>
                   
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

export default Shop