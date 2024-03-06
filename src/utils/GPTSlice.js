import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    GPTSearchShow: false,
    lang:'en'
  },
  reducers: {
    changeGPTSearchShow: (state, action) => {
      state.GPTSearchShow = !state.GPTSearchShow;
    },
    changeLang:(state,action) =>{
      state.lang = action.payload;
    }
  },
});


export default GPTSlice.reducer

export const { changeGPTSearchShow, changeLang } = GPTSlice.actions