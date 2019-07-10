const bestSellersLoaded = (newSellers) => {
    return {
        type: 'BEST_SELLERS_LOADED',
        payload: newSellers
    };
};
const bestSellersRequested = () => {
    return {
        type: 'BEST_SELLERS_REQUESTED',
    };
};
const bestSellersError = (newSellers) => {
    return {
        type: 'BEST_SELLERS_ERROR',
        errorType: newSellers,
    };
};

//Страница с кофе
const allCoffeeLoaded = (newCoffee) => {
    return {
        type: 'ALL_COFFEE_LOADED', 
        payload: newCoffee
    }
}
const allCoffeeRequested = () => {
    return {
        type: 'ALL_COFFEE_REQUESTED', 
    }
}
const allCoffeeError = (newCoffee) => {
    return {
        type: 'ALL_COFFEE_ERROR',
        errorType: newCoffee,
    };
};

//Страница for your pleasure
const allGoodsLoaded = (newGood) => {
    return {
        type: 'ALL_GOODS_LOADED', 
        payload: newGood
    }
}
const allGoodsRequested = () => {
    return {
        type: 'ALL_GOODS_REQUESTED', 
    }
}
const allGoodsError = (newGood) => {
    return {
        type: 'ALL_GOODS_ERROR',
        errorType: newGood,
    };
};
const findItems = (items, value) => {
    return {
        type: 'FIND_ITEMS',
        payload: items,
        search: value
    }
}
const countryFiltered = (country, allCoffee) => {
    return {
        type: 'COUNTRY_FILTERED',
        country: country,
        payload: allCoffee,
    }
}

export {
    bestSellersLoaded,
    allCoffeeLoaded,
    bestSellersRequested,
    allCoffeeRequested,
    bestSellersError,
    allCoffeeError,
    allGoodsLoaded,
    allGoodsRequested,
    allGoodsError,
    findItems,
    countryFiltered,
};