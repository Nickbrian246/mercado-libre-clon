import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  fakeInformation: [],
  fakeInformation2: [],
  test:[]
}

export const mainSlice = createSlice ({
  name:"mainSliceState",
  initialState,
  reducers:{
    setFakeProductsGroup:(state, action ) => {
      state.fakeInformation= action.payload;
    },
    setFakeProductsGroup2:(state, action ) => {
      state.fakeInformation2= action.payload;
    },
  }
});

export default mainSlice.reducer;


export const {setFakeProductsGroup, setFakeProductsGroup2,} = mainSlice.actions;
