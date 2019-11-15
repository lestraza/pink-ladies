import React, { Component } from 'react';
import { context as Context } from '../..';
import { withStore } from '../HOC/withData.jsx';

class Cart extends Component {

    render() {        
        return (
            <div>
                {console.log(this.props.store.data)}
            </div>
        )
    }
}

export default withStore(Cart)
