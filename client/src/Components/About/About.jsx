import React from 'react';
import { Fade } from 'react-reveal';

import about2000 from '../../images/2000.jpg';
import about2008 from '../../images/2008.jpg';
import about2014 from '../../images/2014.jpg';
import about2019 from '../../images/2019.jpg';

function About() {

    const chronicles = [
        {
            year: 2000,
            img: about2000,
            title: "WHERE THE SHADOWS LIVES"
        },
        {
            year: 2008,
            img: about2008 ,
            title: "WE ARE ENOUGH ADULT"
        },
        {
            year: 2014,
            img: about2014,
            title: "FALL IS CLOSER"
        },
        {
            year: 2019,
            img: about2019,
            title: "OK ZOOMER"
        },
    ]

    const renderAboutItem = () => {
        return chronicles.map((item, i) => {
            return (
                <Fade>
                    <div className="about__item" key={i}>
                        <div className="about__year">
                            {item.year}
                        </div>
                        <img src={item.img} alt="about the band" className='about__img' />
                        <div className="about__title">{item.title}</div>
                        <div className="about__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id.
                            Repellendus tempore quas recusandae ipsam similique? Voluptate necessitatibus est,
                            odit debitis non, odio, laudantium voluptas nihil quos dolorum consequuntur expedita?
                        </div>
                    </div>
                </Fade>
            )
        })
    }
    return (
        <div className='wrapper'>
            <div className="about">
                {renderAboutItem()}
            </div>
        </div>
    )
}

export default About;
