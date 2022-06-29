import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  fakeInformation: [],
  fakeInformation2: [],
}

export const mainSlice = createSlice ({
  name:"mainSliceState",
  initialState,
  reducers:{
    setFakeDataInformation:(state, action ) => {
      state.fakeInformation= action.payload;
    },
    setFakeDataInformation2:(state, action ) => {
      state.fakeInformation2= action.payload;
    },
  }
});

export default mainSlice.reducer;


export const {setFakeDataInformation, setFakeDataInformation2} = mainSlice.actions;
