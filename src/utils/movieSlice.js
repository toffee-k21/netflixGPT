import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
<<<<<<< HEAD
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
=======
        popularMovies: null
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
    },
    reducers: {
        addPopularMovieList : (state,action)=>{
            state.popularMovies = action.payload
<<<<<<< HEAD
        },
        addTopRatedMoviesList : (state, action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMoviesList : (state, action)=>{
            state.upcomingMovies = action.payload
=======
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
        }
    }
})

<<<<<<< HEAD
export const {addPopularMovieList, addTopRatedMoviesList, addUpcomingMoviesList} = movieSlice.actions
=======
export const {addPopularMovieList} = movieSlice.actions
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175

export default movieSlice.reducer

