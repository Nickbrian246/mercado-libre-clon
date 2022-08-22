import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  BankCards:[],
}

export const BankCardsSlice = createSlice ({
  name:"BankCardsSlice",
  initialState,
  reducers:{
    setCardInformation:(state, action ) => {
      state.BankCards= action.payload;
    },
  }
});

export default BankCardsSlice.reducer;


export const {setCardInformation, } = BankCardsSlice.actions;



