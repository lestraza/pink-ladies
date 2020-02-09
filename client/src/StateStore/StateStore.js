import React from 'react';
import globalHook from 'use-global-hook';


// interface ICartProduct {	
// 	id: number,
// 	amount: number,
// 	size: string,
// 	price: number
// }


const initialState = {
	prods: [],
	prodsInCart: [],
	modal: '',
	token: '',
	user: {
		isAuth: false,
		isAdmin: false
	}
};

const actions = {
	updateGlobalProds: (store, newProds) => {		
		store.setState({ prods: newProds });
	},
	updateItemsInCart: (store, newProdsInCart) => {
		store.setState({ prodsInCart: newProdsInCart });
	},
	updateGlobalModal: (store, newModal) => {
		store.setState({ modal: newModal });
	},
	updateGlobalToken: (store, newToken) => {
		store.setState({token: newToken})
	},
	updateGlobalUser: (store, user) => {
		store.setState({ user });
	},

};



export const useGlobal = globalHook(React, initialState, actions);