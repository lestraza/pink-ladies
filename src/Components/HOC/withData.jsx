import React from 'react';
import { context as Context } from '../..';

export const withStore = (Component) => {
    return function (props) {
        return (
            <Context.Consumer>
                {
                    store => {                        
                        return <Component store={store} {...props}/>
                    }
                }
            </Context.Consumer>
        )
    }
}