import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  addCard:[], 
}

export const addCard = createSlice ({
  name:"addCard",
  initialState,
  reducers:{
    setAddCard:(state, action ) => {
      state.addCard= [...state.addCard, action.payload];
    },
  }
});

export default addCard.reducer;


export const {setAddCard, } = addCard.actions;
