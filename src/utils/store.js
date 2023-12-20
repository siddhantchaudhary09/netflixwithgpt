import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GptReducer from "./Gptslice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    Gpt: GptReducer,
  },
});

export default store;
