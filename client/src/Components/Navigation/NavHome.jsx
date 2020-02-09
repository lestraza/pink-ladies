import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class NavHome extends Component {
    buttonNames = ['about', 'discography', 'tour', 'shop'];
    showButtons = () => {
         return this.buttonNames.map((button, key) => {
            return (
                <Link className='main-nav__item' key={key} to={`/${button}`}>
                    {button}
                </Link>
            )
        })
    }
    render() {
        return (
            <div className={`main-nav main-nav--${this.props.name}`}>
                {this.showButtons()}
            </div>
        )
    }
}
