import cartActionTypes from "./cart.types";

export const toggleCartHidden = ()=>({

    type:cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addToCart = item=>({

       type:cartActionTypes.ADD_TO_CART,
       payload:item
})

export const removeCartItem = item => ({

    type:cartActionTypes.REMOVE_CART_ITEM,
    payload:item
});

export const removeItem = item =>({

    type:cartActionTypes.REMOVE_ITEM,
    payload:item
});

