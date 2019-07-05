const bestListLoaded = (newList) => {
    return {
        type: 'BEST_LIST_LOADED',
        payload: newList
    };
};
export {
    bestListLoaded
};