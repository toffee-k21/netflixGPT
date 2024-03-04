import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
      addUser: (state, action) => {
        //action is an object 
        //this is reducer funtion
        // console.log(action)
        return action.payload; //this will modify the state//this will return and this returned value is for state
      },
      removeUser: (state, action) => {
        return null;
      },
    },
});

// console.log()

export const { addUser, removeUser } = userSlice.actions


export default userSlice.reducer


