
const initialState = {
    bestSellers: [
        
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEST_SELLERS_LOADED':
            return {
                bestSellers: action.payload    
            };
            default:
                return state;
    }
}

export default reducer;