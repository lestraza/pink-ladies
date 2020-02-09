import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Element } from 'react-scroll';

import Layout from './Layout';
import Home from '../Home/Home';
import About from '../About/About';
import Discography from '../Discography/Discography';
import Tour from '../Tour/Tour';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import Auth from './Auth';
import Dashboard from '../Dashboard/Dashboard';
import AdressForm from '../Cart/AdressForm';


// const App = () => {
// 	const [globalState, globalActions] = useGlobal();	
// 	return (
// 	  <div>
// 		<p>
// 		  counter:
// 		  {globalState.prods.map(t => `${t},`)}
// 		</p>
// 		<button type="button" onClick={() => globalActions.addToCounter([1,2,3])}>
// 		  +1 to global
// 		</button>
// 	  </div>
// 	);
//   };

function Routes(props) {
    return (

        <Element name='top'>
            <Auth>
                <Layout>
                    <Switch>
                        <Route {...props} path="/" exact component={Home}/>
                        <Route {...props} path="/about" exact component={About}/>
                        <Route {...props} path="/discography" exact component={Discography}/>
                        <Route {...props} path="/tour" exact component={Tour}/>
                        <Route {...props} path="/shop" exact component={Shop}/>
                        <Route {...props} path="/cart" exact component={Cart}/>
                        <Route {...props} path="/adress_form" exact component={AdressForm}/>
                        <Route {...props} path="/user/dashboard" exact component={Dashboard}/>
                       
                    </Switch>
                </Layout>
            </Auth>
        </Element>
    )
}

export default Routes;
