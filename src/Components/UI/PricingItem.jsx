import React from 'react'

function PricingItem() {
    const prices = {
        MP3: '7.99',
        CD: '11.99',
        VINYL: '23.99'
    }
    const renderPricingItem = () => {       
        return Object.keys(prices).map(key=> {
            return <div className="album__pricing-item"><span>{key} </span>${prices[key]}</div> 
        })
    }
    return (
        <div className="album__pricing">
           {renderPricingItem()} 
        </div>
    )
}

export default PricingItem
