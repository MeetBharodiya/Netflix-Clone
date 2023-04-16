export const getMoviesStart = ()=>({
        type: "GET_MOVIES_START",
    });
export const getMoviesSuccess = (movies)=>({
        type: "GET_MOVIES_SUCCESS",
        payload:movies
    });
export const getMoviesFailure = ()=>({
        type: "GET_MOVIES_FAILURE",
    });


export const createMoviesStart = ()=>({
        type: "CREATE_MOVIE_START",
    });
export const createMoviesSuccess = (movies)=>({
        type: "CREATE_MOVIE_SUCCESS",
        payload:movies
    });
export const createMoviesFailure = ()=>({
        type: "CREATE_MOVIE_FAILURE",
    });

    export const updateMovieStart = () => ({
        type: "UPDATE_MOVIE_START"
      });
      
      export const updateMovieSuccess = (movie) => ({
        type: "UPDATE_MOVIE_SUCCESS",
        payload:movie
      });
      
      export const updateMovieFailure = () => ({
        type: "UPDATE_MOVIE_FAILURE",
      });


export const deleteMoviesStart = ()=>({
        type: "DELETE_MOVIES_START",
    });
export const deleteMoviesSuccess = (id)=>({
        type: "DELETE_MOVIES_SUCCESS",
        payload:id
    });
export const deleteMoviesFailure = ()=>({
        type: "DELETE_MOVIES_FAILURE",
    });