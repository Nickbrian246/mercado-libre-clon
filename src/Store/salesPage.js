import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  comments: [],
}

export const SalesPageSlice = createSlice ({
  name:"mainSliceState",
  initialState,
  reducers:{
    setComments:(state, action ) => {
      state.comments = action.payload;
    },
  }
});

export default SalesPageSlice.reducer;


export const {setComments} = SalesPageSlice.actions;