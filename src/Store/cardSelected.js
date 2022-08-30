import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cardSelected: [],
}

export const cardSelected =  createSlice ( {
  name:'cardSelected',
  initialState,
  reducers :{
    setCardSelected: (state, action) => {
      state.cardSelected = action.payload;
    }
  }
});

export default cardSelected.reducer;

export const {setCardSelected}= cardSelected.actions;