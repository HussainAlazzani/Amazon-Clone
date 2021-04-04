export const initialState = {
    basket: [],
};

// Selector
export const getBasketTotal = basket => basket?.reduce((sum, item) => item.price + sum, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;
    }
};

export default reducer;