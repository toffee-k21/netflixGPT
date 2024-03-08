import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import GPTSearchReducer from "./GPTSlice"

const appStore = configureStore({
  reducer:{
    user: userReducer,
    movie: movieReducer,
    gpt: GPTSearchReducer,
  }
})

export default appStore;

