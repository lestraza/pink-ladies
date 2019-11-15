import React, { Component } from 'react';
import HomeHeader from '../Home/HomeHeader';
import Landing from './Landing/Landing';

import { scroller, Element } from 'react-scroll';

export default class Home extends Component {


    scrollTo = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 300,
            smooth: true
          })
    }
    render() {
        return (
            <div className='home'>
                <HomeHeader scrollTo={this.scrollTo} />
                <Element name='landing'>
                	<Landing />
                </Element>
            </div>
        )
    }
}
