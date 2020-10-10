export const initialState = {
    basket: [
        {
        id:"123123423",
        title:"Product One, The best book there ever was",
        price:12.99,
        rating:5,
        image:"https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
],
    user: null,
};


export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action)  => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant't remove product (id: ${action.id}) as it's not in basket`
                );
            }

            return { 
                ...state, 
                basket: newBasket, };
        default:
            return state;
    }
}

export default reducer;
