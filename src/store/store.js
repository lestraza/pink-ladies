export class Store {
    data = {
        products: []
    }

    dispatch(newValue) {
        this.data.products = newValue;
    }
}