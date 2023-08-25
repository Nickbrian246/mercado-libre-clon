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
      const currentGroupOfProducts = state.addCard;
      console.log(currentGroupOfProducts,"soy el gruoujpiiohu")
      const checkIfIdExist = currentGroupOfProducts.findIndex((productIdInCart) => productIdInCart === id);
      console.log((`id encontreado o no `, checkIfIdExist));
      if (checkIfIdExist >= 0) {
        console.log(checkIfIdExist,`entrnadon con id`)
        let currentProduct = currentGroupOfProducts[checkIfIdExist];
        let updateInformationProduct = { ...currentProduct, products };
        currentGroupOfProducts.splice(checkIfIdExist, 1, updateInformationProduct);
        state.addCard = [currentGroupOfProducts]
        return;
      } else {
        state.addCard = [...state.addCard, action.payload];
      }
    },
  }
  
    },
);

export default addCard.reducer;


export const {setAddCard, } = addCard.actions;
