import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    Trendingmovie: null,
    Popularmovie: null,
    Nowplayingmovie: null,
    Upcomingmovie: null,
    Trailer: null,
  },
  reducers: {
    addTrendingmovie: (state, action) => {
      state.Trendingmovie = action.payload;
    },
    addPopularmovie: (state, action) => {
      state.Popularmovie = action.payload;
    },
    addNowplayingmovie: (state, action) => {
      state.Nowplayingmovie = action.payload;
    },
    addUpcomingmovie: (state, action) => {
      state.Upcomingmovie = action.payload;
    },
    addTrailer: (state, action) => {
      state.Trailer = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addTrendingmovie,
  addNowplayingmovie,
  addPopularmovie,
  addUpcomingmovie,
  addTrailer,
} = moviesSlice.actions;
