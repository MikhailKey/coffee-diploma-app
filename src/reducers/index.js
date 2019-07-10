const initialState = {
    bestSellers: [],
    allCoffee: [],
    allGoods: [],
    filterItems: [],
    loading: true,
    error: false,
    countryChosen: null,
    pageNumber: 1,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BEST_SELLERS_LOADED':
            return {
                ...state,
                loading: false,
                bestSellers: action.payload 

            };
        case 'BEST_SELLERS_REQUESTED':
                return {
                    ...state,
                    bestSellers: state.bestSellers,
                    loading: true,
                };
        case 'BEST_SELLERS_ERROR':
                return {
                    ...state,
                    bestSellers: state.bestSellers,
                    error: true,
                };
        
        case 'ALL_COFFEE_LOADED':
            return {
                ...state,
                loading: false,
                allCoffee: action.payload

            }
        case 'ALL_COFFEE_REQUESTED':
            return {
                ...state,
                loading: true,
                allCoffee: state.allCoffee,

            }    
        case 'ALL_COFFEE_ERROR':
            return {
                ...state,
                error: true,
                allCoffee: state.allCoffee,

            }   
        case 'ALL_GOODS_LOADED':
            return {
                ...state,
                loading: false,
                allGoods: action.payload

            }
        case 'ALL_GOODS_REQUESTED':
            return {
                ...state,
                loading: true,
                allGoods: state.allGoods,

            }    
        case 'ALL_GOODS_ERROR':
            return {
                ...state,
                error: true,
                allGoods: state.allGoods,

            }   
        case 'FIND_ITEMS': 
            const searchValue = action.search;
            console.log(state.allCoffee);
            const items = action.payload.filter(item => item.name.toLowerCase().includes(searchValue));
            return {
                ...state,
                filterItems: items
            };
        case 'COUNTRY_FILTERED':  
            const newItems = action.payload;
            return {
                ...state,
                filterItems: newItems.filter(newItem => {
                    return newItem.country === action.country;
                }),
                pageNumber: action.payload
            };
        default:
            return state;
    }
}

export default reducer;