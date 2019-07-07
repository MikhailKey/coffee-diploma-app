const bestSellersLoaded = (newSellers) => {
    return {
        type: 'BEST_SELLERS_LOADED',
        payload: newSellers
    };
};
const allCoffeeLoaded = (newCoffee) => {
    return {
        type: 'ALL_COFFEE_LOADED', 
        payload: newCoffee
    }
}
export {
    bestSellersLoaded,
    allCoffeeLoaded
};