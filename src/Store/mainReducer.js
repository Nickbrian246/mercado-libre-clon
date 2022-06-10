import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  firstInformation: [],
}

export const mainSlice = createSlice ({
  name:"mainSliceState",
  initialState,
  reducers:{
    SetInformation:(state, action ) => {
      state.firstInformation= action.payload;
    },
  }
});

export default mainSlice.reducer;


export const {SetInformation} = mainSlice.actions;
