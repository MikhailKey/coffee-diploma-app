const bestSellersLoaded = (newSellers) => {
    return {
        type: 'BEST_SELLERS_LOADED',
        payload: newSellers
    };
};
export {
    bestSellersLoaded
};