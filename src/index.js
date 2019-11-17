import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/HOC/Routes';

ReactDOM.render(
	<BrowserRouter>
		<Routes/>
	</BrowserRouter>,
	document.getElementById('root'));

