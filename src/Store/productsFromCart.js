import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    groupOfProducts:[],
}

export const productsFromCart = createSlice ({
    name:"productsFromCart",
    initialState,
    reducers:{
    setProductsFromCart:(state, action ) => {
        state.groupOfProducts= action.payload;
    },
    }
});

export default productsFromCart.reducer;


export const {setProductsFromCart, } = productsFromCart.actions;



