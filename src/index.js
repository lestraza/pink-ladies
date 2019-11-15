import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/HOC/Routes';
import { Store } from './store/store';

export const context = createContext();

const Provider = context.Provider;
const store = new Store();

ReactDOM.render(
	<Provider value={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
document.getElementById('root'));

