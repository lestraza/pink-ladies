import React from 'react';
import Logo from '../UI/Logo';
import Socials from '../UI/Socials';

import {countries }from '../../data/countries.js';
import { scroller, Element } from 'react-scroll';

function Footer() {

    const renderCountries = () => {
        return countries.map((country, i) => {
            return (
                <option value={i} key={country}>{country}</option>
            )
        })
    }
    const scrollTo = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 300,
            smooth: true
          })
    }
    return (
        <footer className='footer'>
            <div className="wrapper wrapper--footer">
                <div className="footer__logos">
                    <div className="logo" onClick={() => scrollTo("top")}>
                        <Logo/>
                    </div>
                    <div className="universal-logo"></div>
                    <div className="footer__copy">© Universal Music and TTB All Rights Reserved 2019</div>
                </div>
                <div className="footer__subscribe">
                    <h3>JOIN MAILING LIST</h3>
                    <div className="subscribe">
                        <input type="text" placeholder='Your email'/>
                        <select>
                            <option>Select your country</option>
                            {renderCountries()}
                        </select>
                        <div className="subscribe__agreement">
                            <input type="checkbox" id='agreement'/>
                            <label htmlFor="agreement">
                            By submitting my information above, I acknowledge that I have reviewed and hereby agree to the Privacy Policy and Terms of Use.
                            </label>
                        </div>
                        <button type='submit' className='prim-button prim-button--footer'>Join</button>
                    </div>
                </div>
                <div className="footer__social">
                    <h3>BE IN TOUCH WITH US</h3>
                    <Socials />
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
