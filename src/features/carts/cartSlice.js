import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLocal, setCartToLocal } from "../local/local";


export const  cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        carts: getCartFromLocal()
    },
    reducers: {
        setCart: (state, action) => {
            state.carts = [...state.carts, action.payload];
            setCartToLocal(state.carts);
        }
    }
})


export const {setCart} = cartSlice.actions;