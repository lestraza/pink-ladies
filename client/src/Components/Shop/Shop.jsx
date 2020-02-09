import React, { useEffect} from 'react';
import { Fade } from 'react-reveal';
import ItemShop from './ItemShop';
import { useGlobal } from '../../StateStore/StateStore';
import Loader from 'react-loader-spinner';
import { getAllProducts } from '../../UserActions/Actions';

const Shop = () => {

    const [globalState, globalActions ] = useGlobal();
    const { updateGlobalProds } = globalActions;
    const { prods } = globalState;

    useEffect(() => {
        getAllProducts()
        .then(response => {          
            const normalizedProds = normalizeProds(response.data)
            updateGlobalProds([...prods, ...normalizedProds])
        })
        .catch(err => {
            console.error(err);
        })
    }, [])    

    const normalizeProds = (products) => {
        const nProds = []

        products.forEach(prod => {
            const { name } = prod
            const hasProd = nProds.some(nProd => nProd.name === name)
            
            if (!hasProd) {
                const { name, url, type, price, size, _id  } = prod
                const newProd = {
                    name,
                    price,
                    url,
                    type,
                    sizes: [{
                        size,
                        id: _id,
                    }]
                }
                nProds.push(newProd)
            } else {
                const { name, size, _id  } = prod
                const newProd = nProds.find(nProd => nProd.name === name)
                newProd.sizes.push({
                    size,
                    id: _id
                })
            }
        })

        return nProds;
    }

    const renderItemShop = () => {
      return prods.map((prod, i) => {
          return <ItemShop item={prod} key={i}/>
      })    
    }

    return (
        prods.length ? (
            <div className='wrapper'>
            <div className='shop'>
                <h1>MERCH AND ACCESSORIES</h1>

                <Fade>
                    <h2>T-SHIRTS</h2>
                    <div className="shop__row">
                        {renderItemShop()}
                    </div>
                </Fade>
            </div>
        </div>
        )
        :(
            <Loader type={'Bars'}/>
        )        
    )

}

export default Shop;