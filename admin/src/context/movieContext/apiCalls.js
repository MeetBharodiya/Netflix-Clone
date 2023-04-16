import axios from "axios"
import { createMoviesFailure, createMoviesStart, createMoviesSuccess,  deleteMoviesFailure, deleteMoviesStart, deleteMoviesSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./MovieAction";

export const getMovies = async (dispatch)=>
{
        dispatch(getMoviesStart());
        try {
            const res = await axios.get("movie",
            {
                headers:{
                        "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
                },
            })
            dispatch(getMoviesSuccess(res.data));
            
            
            
        } catch (error) {
            dispatch(getMoviesFailure());
        }
}

export const createMovie = async (movie,dispatch)=>{
    dispatch(createMoviesStart());
    try {
       const res= await axios.post("/movie",movie,
        {
            headers:{
                    "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
            },
        })
        dispatch(createMoviesSuccess(res.data));
        
        
        
    } catch (error) {
        dispatch(createMoviesFailure());
    }
}



//UPDATED MOVIE
export const updateMovie = async (a, dispatch) => {
    dispatch(updateMovieStart());
    try {
        const res = await axios.put("movie/" + a._id,
        {
        headers: 
        {
          "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
    //   console.log(res.data);
      dispatch(updateMovieSuccess(res.data));
    } catch (err) {
      dispatch(updateMovieFailure());
    }
  };



export const deleteMovies = async (id,dispatch)=>{
        dispatch(deleteMoviesStart());
        try {
            await axios.delete("movie/"+id,
            {
                headers:{
                        "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
                },
            })
            dispatch(deleteMoviesSuccess(id));
            
            
            
        } catch (error) {
            dispatch(deleteMoviesFailure());
        }
}