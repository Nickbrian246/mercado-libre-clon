import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productSelected:[]
}

export const productSelected = createSlice ({
  name:"productSelected",
  initialState,
  reducers:{
    setProductSelected:(state, action ) => {
      state.productSelected= action.payload;
    },
    
  }
});

export default productSelected.reducer;


export const {setProductSelected} = productSelected.actions;