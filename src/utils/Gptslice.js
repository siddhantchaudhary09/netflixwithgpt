import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
  name: "Gpt",
  initialState: {
    showgptsearch: false,
    gptmovies: null,
    movienames: null,
  },
  reducers: {
    addgptview: (state, action) => {
      state.showgptsearch = !state.showgptsearch;
    },
    addgptmovies: (state, action) => {
      state.gptmovies = action.payload;
    },
    addmovienames: (state, action) => {
      state.movienames = action.payload;
    },
    removemovies: (state) => {
      state.gptmovies = null;
    },
    removenames: (state) => {
      state.movienames = null;
    },
  },
});

export default Gptslice.reducer;
export const {
  addgptview,
  addgptmovies,
  addmovienames,
  removemovies,
  removenames,
} = Gptslice.actions;
