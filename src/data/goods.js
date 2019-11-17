import tShirt1 from '../images/shop/123.jpg';
import tShirt2 from '../images/shop/124.jpg';
import tShirt3 from '../images/shop/125.jpg';
import hoodie1 from '../images/shop/130.png';
import hoodie2 from '../images/shop/131.jpg';
import hoodie3 from '../images/shop/132.jpg';
import hat1 from '../images/shop/133.jpg';
import hat2 from '../images/shop/134.jpg';
import hat3 from '../images/shop/126.jpg';

const shopItems = [
    {
        type: 't-shirts',
        name: 'basic white t-shirt',
        price: 17.99,
        url: tShirt1,
        sizes: ['s', 'm', 'l', 'xl', 'xxl'],
        id: 1,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,     
    },
    {
        type: 't-shirts',
        name: 'basic black t-shirt',
        price: 17.99,
        url: tShirt2,
        sizes: ['s', 'm', 'l', 'xl', 'xxl'],
        id: 2,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,
    },
    {
        type: 't-shirts',
        name: 'basic gray t-shirt',
        price: 17.99,
        url: tShirt3,
        sizes: ['s', 'm', 'l', 'xl', 'xxl'],
        id: 3,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,
    },
    {
        type: 'hoodies',
        name: 'basic white hoodie',
        price: 27.99,
        url: hoodie1,
        sizes: ['s', 'm', 'l', 'xl', 'xxl'],
        id: 4,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,
    },
    {
        type: 'hoodies',
        name: 'basic black hoodie',
        price: 27.99,
        url: hoodie2,
        sizes: ['s', 'm', 'l', 'xl', 'xxl'],
        id: 5,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,
    },
    {
        type: 'hoodies',
        name: 'basic gray hoodie',
        price: 27.99,
        url: hoodie3,
        sizes: ['s', 'm', 'l', 'xl', 'xxl'],
        id: 6
    },
    {
        type: 'hats',
        name: 'BLACK WOOL HAT',
        price: 6.99,
        url: hat1,
        sizes: ['s', 'm'],
        id: 7,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,
    },
    {
        type: 'hats',
        name: 'BLACK SNAPBACK HAT',
        price: 6.99,
        url: hat2,
        sizes: ['s', 'm'],
        id: 8,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,
    },
    {
        type: 'hats',
        name: 'KHAKI BUCKET HAT',
        price: 5.99,
        url: hat3,
        sizes: ['s', 'm'],
        id: 9,
        amount: 1,
        selectedSizes: [],
        isAddedToCart: false,
    },
]
export default shopItems;