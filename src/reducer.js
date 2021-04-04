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

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Product ${action.id} is not found`)
            }
            return { ...state, basket: newBasket };

        default:
            return state;
    }
};

export default reducer;