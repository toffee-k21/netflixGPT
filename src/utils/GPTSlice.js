import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    GPTSearchShow: false,
  },
  reducers: {
    changeGPTSearchShow: (state, action) => {
      state.GPTSearchShow = !state.GPTSearchShow;
    },
  },
});


export default GPTSlice.reducer

export const { changeGPTSearchShow } = GPTSlice.actions