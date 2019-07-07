
const initialState = {
    bestSellers: [],
    allCoffee: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEST_SELLERS_LOADED':
            return {
                bestSellers: action.payload    
            };
        case 'ALL_COFFEE_LOADED':
            return {
                allCoffee: action.payload
            }
        default:
            return state;
    }
}

export default reducer;