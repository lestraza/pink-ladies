import React from 'react';
import globalHook from 'use-global-hook';
import goods from '../data/goods';

// interface ICartProduct {	
// 	id: number,
// 	amount: number,
// 	size: string,
// 	price: number
// }

const initialState = { goods };

const actions = {
	updateItemsInCart: (store, newGoods) => {
		store.setState({ goods: newGoods });
	},
};


export const useGlobal = globalHook(React, initialState, actions);