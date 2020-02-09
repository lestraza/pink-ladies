import React from 'react';
import {withRouter} from 'react-router-dom';

import Footer from '../HeaderFooter/Footer';
import Header from '../HeaderFooter/Header';
import Modal from '../Modal/Modal';


function Layout(props) {
    const {pathname} = props.location;
    
    return (
        <div>
            {pathname !== '/' && <Header  />}
            {props.children}
            <Footer />
            <Modal />
        </div>
    )
}

export default withRouter(Layout);
