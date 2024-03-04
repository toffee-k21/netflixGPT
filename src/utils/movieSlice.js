import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        popularMovies: null
    },
    reducers: {
        addPopularMovieList : (state,action)=>{
            state.popularMovies = action.payload
        }
    }
})

export const {addPopularMovieList} = movieSlice.actions

export default movieSlice.reducer

