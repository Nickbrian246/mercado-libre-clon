import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:1, 
}

export const howManyProducts = createSlice ({
    name:"howManyProducts",
    initialState,
    reducers:{
    setHowManyProducts:(state, action ) => {
        state.products = action.payload
    },
    }
});

export default howManyProducts.reducer;


export const {setHowManyProducts, } = howManyProducts.actions;
