import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/HOC/Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCcPaypal, faCcVisa, faCcMastercard, faCcAmex} from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt, faShoppingCart,  } from '@fortawesome/free-solid-svg-icons';

library.add(faSignOutAlt, faShoppingCart, faCcPaypal, faCcVisa, faCcMastercard, faCcAmex)

ReactDOM.render(
	<BrowserRouter>
		<Routes/>
	</BrowserRouter>,
	document.getElementById('root'));

