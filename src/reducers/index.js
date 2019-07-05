
const initialState = {
    bestList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEST_LIST_LOADED':
            return {
                bestList: action.payload    
            };
            default:
                return state;
    }
}

export default reducer;