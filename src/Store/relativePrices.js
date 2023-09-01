import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalRelativePrices:[],
}

export const RelativePrices = createSlice ({
    name:"BankCardsSlice",
    initialState,
    reducers:{
    setRelativcePrice:(state, action ) => {
        state.totalRelativePrices= [...state.totalRelativePrices,action.payload];
    },
    }
});

export default RelativePrices.reducer;


export const {setRelativcePrice, } = RelativePrices.actions;



