import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
  name: "Gpt",
  initialState: {
    showgptsearch: false,
  },
  reducers: {
    addgptview: (state, action) => {
      state.showgptsearch = !state.showgptsearch;
    },
  },
});

export default Gptslice.reducer;
export const { addgptview } = Gptslice.actions;
