import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addPopularMovieList : (state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMoviesList : (state, action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMoviesList : (state, action)=>{
            state.upcomingMovies = action.payload
        }
    }
})

export const {addPopularMovieList, addTopRatedMoviesList, addUpcomingMoviesList} = movieSlice.actions

export default movieSlice.reducer

