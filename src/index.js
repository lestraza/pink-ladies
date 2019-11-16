import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/HOC/Routes';
import globalHook from 'use-global-hook';
const initialState = {
	prods: [],
  };
   
  const actions = {
	addToCounter: (store, arr) => {
	  const newCounterValue = arr;	  
	  store.setState({ prods: newCounterValue });
	},
  };
   
  export const useGlobal = globalHook(React, initialState, actions);
   


ReactDOM.render(
	<BrowserRouter>
		<Routes/>
	</BrowserRouter>,
	document.getElementById('root'));

