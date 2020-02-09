import React  from 'react';
import Logo from '../UI/Logo';
import NavHome from '../Navigation/NavHome';
import { Fade } from 'react-reveal';
import arrow from '../../images/arrow.svg';



function HomeHeader(props) {
    return (
        <Fade>
            <div className="home__header" >
                <div className="wrapper">
                    <div className="header__logo link">
                        <Logo />
                    </div>
                    <NavHome name={'home'} />
                </div>
                <div className='home__gradient'>
                    <div className="wrapper">
                     
                          
                                <div className="home__caption"
                                    onClick={() => props.scrollTo('landing')}
                                >
                                    Explore new album
                                            </div>
                                <div className="home__scroll-down">
                                    <img src={arrow} alt="arrow" />
                                    <img src={arrow} alt="arrow" />
                                </div>
                            
                     
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default HomeHeader;
