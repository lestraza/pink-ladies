import React from 'react';
import globalHook from 'use-global-hook';

const initialState = {
	prods: [],
	
  };
   
  const actions = {
	updateItemsInCart: (store, arr) => {
	  const newProd = arr;	  
	  store.setState({ prods: newProd });
	},
};
  
   
  export const useGlobal = globalHook(React, initialState, actions);