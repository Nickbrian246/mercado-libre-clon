import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  comments: [],
  PositivesComments: [],
  NegativesComments: [],
  AllComments: [],
}

// setComments es el metodo para guardas los comentarios de '' preguntas al vendedor''
export const SalesPageSlice = createSlice ({
  name:"mainSliceState",
  initialState,
  reducers:{
    setComments:(state, action ) => {
      state.comments = action.payload;
    },
    setPositivesComments: (state, action) => {
      state.PositivesComments = action.payload;
    },
    setNegativesComments: (state, action) => {
      state.NegativesComments = action.payload;
    },
    setAllComments: (state, action) => {
      state.AllComments = action.payload;
    },
  }
});

export default SalesPageSlice.reducer;


export const {
  setComments,
  setPositivesComments,
  setNegativesComments,
  setAllComments,
} = SalesPageSlice.actions;