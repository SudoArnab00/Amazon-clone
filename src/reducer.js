export const initialState={
    cart:[],
    user: null,
};

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart : [...state.cart, action.item]
            };
            
        case 'REMOVE_FROM_CART':
            // clone the cart
            let newCart = [...state.cart];
            
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
            if (index >= 0) {
                // item exist in the basket, remove it..
                newCart.splice(index,1);
            } else {
                console.warn(
                    `can't remove product {id: ${action.id}) as it is not in cart`
                );
            }
            return {
                ...state, 
                cart: newCart
            };
            
        default:
            return state;
  }
};

export default reducer;