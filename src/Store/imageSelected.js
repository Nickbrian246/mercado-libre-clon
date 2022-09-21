import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  imageSelected:{},
}

export const imageSelected = createSlice ({
  name:"imageSelected",
  initialState,
  reducers:{
    setImageSelected:(state, action ) => {
      state.imageSelected= action.payload;
    },
    
  }
});

export default imageSelected.reducer;


export const {setImageSelected, } = imageSelected.actions;