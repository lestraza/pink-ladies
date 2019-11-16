import React, { Component } from 'react';
import { Fade } from 'react-reveal';

export default class ItemShop extends Component {
    state = {
        amount: 1,
        selectedSize: '',
        isAddedToCart: false,
        isShowedError: false
    }
    decrementAmount = () => {
        if (this.state.amount > 1) {
            this.setState({
                amount: this.state.amount - 1
            })
        }
    }
    incrementAmount = () => {
        this.setState({
            amount: this.state.amount + 1
        })
    }
    selectSize = (size) => {

        this.setState({
            selectedSize: size,
            isShowedError: false
        })
    }

    addToCart = () => {
        if (!this.state.selectedSize) {
            this.setState({
                isShowedError: true
            })
        } else {
            this.setState({
                isAddedToCart: true
            });
            // this.props.addProductsToCart({
            //     amount: this.state.amount,
            //     id: this.props.item.id
            // });
        }
        
    }

    renderSize = () => {
        const { sizes } = this.props.item;
        const { selectedSize } = this.state;
        return sizes.map((size, i) => {
            return (
                <span key={i}
                    onClick={() => this.selectSize(size)}
                    className={selectedSize === size ? 'selected' : ''}>
                    {size}
                </span>
            )
        })
    }

    render() {
        const { item } = this.props;
        const { amount, isAddedToCart, isShowedError } = this.state;
        return (
            <div className="shop__item">
                <img src={item.url} alt="" className='shop__img' />
                <div className="shop__name">{item.name}</div>
                <div className="shop__price">
                    ${item.price}
                </div>
                <div className="shop__details">
                    {isShowedError && <Fade>
                        <div className={"shop__size-error"}>
                            Please select your size first
                        </div>
                    </Fade>}
                    
                    <div className="sizes">
                        {this.renderSize()}
                    </div>
                    <div className="amount">
                        <span className="amount__change" onClick={() => this.decrementAmount()}>-</span>
                        <span>{amount}</span>
                        <span className="amount__change" onClick={() => this.incrementAmount()}>+</span>
                    </div>
                </div>
                <div className="prim-button" onClick={() => this.addToCart()}>{!isAddedToCart ? 'Purchase' : 'In your basket'}</div>
            </div>
        )
    }
}
