import React from 'react';
import { Flip } from 'react-reveal';
import tour from '../../data/tour.js';

function Tour() {

    const renderTourItems = () => {
        return tour.map((tourItem, i) => {
            return (
                <Flip right cascade delay={100 + 50 * i}>
                    <div className="tour__item">
                        <div className="tour__date">
                            <div className="tour__day">{tourItem.day}</div>
                            <div className="tour__month">{tourItem.month}</div>
                        </div>
                        <div className="tour__details">
                            <div className="tour__location">{tourItem.location}</div>
                            <div className="prim-button">BUY TICKETS</div>
                        </div>
                    </div>
                </Flip>
            )
        })
    }

    return (
        <div className='wrapper'>
            <div className="tour">
                
                {renderTourItems()}                
            </div>
        </div>
    )
}

export default Tour;
