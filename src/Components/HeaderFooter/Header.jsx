import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import Logo from '../UI/Logo';
import NavHome from '../Navigation/NavHome';
import CartIcon from '../UI/CartIcon';




export default class Header extends Component {
    render() {
        return (
            <Fade top delay={700}>
                <div className="header">
                    <div className="wrapper wrapper--header">
                        <div className='header__logo-link'>
                            <Logo />
                        </div>
                        <NavHome name={'header'}/>
                        {/* <Fade>
                            <div className="sidebar">
                                <NavHome name={"sidebar"} />
                            </div>
                        </Fade> */}
                        <CartIcon />
                    </div>
                </div>
            </Fade>
        )
    }
}
