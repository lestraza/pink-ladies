import axios from 'axios';

export function registerRequest(dataToSubmit) {
    return axios.post('/api/users/register', dataToSubmit)
}

export function signInRequest(dataToSubmit) {
    return axios.post('/api/users/login', dataToSubmit)
}

export function auth(token) {
    return axios.post(`/api/users/auth`, { token });
}

export function getAllProducts() {
    return axios.get(`/api/products`);
}

export function addToCart(productId) {    
    return axios.post(`/api/users/cart_add_prod`, {productId})
}

export function getCartItems() {
    return axios.get(`/api/users/cart_get_cart`);
}

export function deleteCartItem(productId) {
    return axios.post(`/api/users/cart_item_delete`, {productId})
}
export function createOrder(data) {
    return axios.post(`/api/users/order`, data)
}