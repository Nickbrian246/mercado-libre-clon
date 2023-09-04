import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  addCard:[], 
}

export const addCard = createSlice ({
  name:"addCard",
  initialState,
  reducers: {
    setAddCard: (state, action) => {
      const { id, products } = action.payload;
      const checkIfExist= state.addCard.some((item) => {return item.id=== id});
      const index = state.addCard.findIndex((item) => { return item.id === id});
      if(checkIfExist){
        state.addCard[index].products = state.addCard[index].products + products
      }else {
        state.addCard = [...state.addCard, action.payload];   
      } 
    },
    addItem:(state, action) => {
      const id = action.payload
      const index = state.addCard.findIndex((item) => { return item.id === id});
        state.addCard[index].products = state.addCard[index].products + 1
      
    },
    setItem:(state, action) => {
      const {id,  products} = action.payload
      const index = state.addCard.findIndex((item) => { return item.id === id});
        state.addCard[index].products = products
      
    },
    substractAnElement:(state,action) => {
      const id = action.payload
      const index = state.addCard.findIndex((item) => { return item.id === id});
        state.addCard[index].products = state.addCard[index].products - 1
    },
    deleteItem:(state, action) =>{
        const id = action.payload;
        state.addCard = state.addCard.filter((product) => product.id !== id);
    },
    deleteAllCartProducts:(state) =>{
        state.addCard = []
    },
  }
  
    },
);

export default addCard.reducer;


export const {
  setAddCard,
  addItem,
  substractAnElement,
  deleteItem,
  setItem,
  deleteAllCartProducts,
} = addCard.actions;
