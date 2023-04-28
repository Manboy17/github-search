import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorities: JSON.parse(localStorage.getItem("fav") ?? "[]"),
};

export const githubSlice = createSlice({
  name: "guthub",
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<string>) => {
      state.favorities.push(action.payload);
      localStorage.setItem("fav", JSON.stringify(state.favorities));
    },
    removeFromFav: (state, action: PayloadAction<string>) => {
      state.favorities = state.favorities.filter((f) => f != action.payload);
      localStorage.setItem("fav", JSON.stringify(state.favorities));
    },
  },
});

export const { addToFav, removeFromFav } = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
