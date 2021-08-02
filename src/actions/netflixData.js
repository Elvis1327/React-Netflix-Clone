
import { allMovies } from "../helpers/dataFetch";
import { TYPES } from "../types/types";
import { netflixComedyMoviesFetch, netflixActionMoviesFetch, netflixRomanceMoviesFetch, netflixDocumentariesMoviesFetch } from "../helpers/dataFetch" 

// START ACTION OF BANNER
const info = (data) => {
    return {
        type: TYPES.netflixMoviesData,
        payload: data
    }
}
export const moviesInfo = () => {
    return async (dispatch) => {
        const resp = await allMovies();
        dispatch(info(resp.results))
    }
}
// Fin ACTION OF BANNER


// START ACTION COMEDY MOVIES
const comedyMovies = (data) => {
    return {
        type: TYPES.netflixComedyMovies,
        payload: data
    }
}
export const netflixComedyMovies = () => {
    return async (dispatch) => {
        const resp = await netflixComedyMoviesFetch();
        dispatch(comedyMovies(resp.results))
    }
}
// FIN ACTION COMEDY MOVIES


// START ACTIONS ACTION MOVIES
const actionMovies = (data) => {
    return {
        type: TYPES.netflixActionMovies,
        payload: data
    };
}
export const netflixActionMovies = () => {
    return async (dispatch) => {
        const resp = await netflixActionMoviesFetch();
        dispatch(actionMovies(resp.results))
    }
};
// FIN ACTIONS ACTION MOVIES

// START ACTIONS ROMANCE MOVIES
const romanceMovies = (data) => {
    return {
        type: TYPES.netflixRomanceMovies,
        payload: data
    };
};
export const netflixRomancesMovies = () => {
    return async (dispatch) => {
        const resp = await netflixRomanceMoviesFetch();
        dispatch(romanceMovies(resp.results))
    };
};
// FIN ACTIONS ROMANCE MOVIES


// START DOCUMENTARIES MOVIES
const documentariesMovies = (data) => {
    return {
        type: TYPES.netflixDocumentaries,
        payload: data
    };
};
export const netflixDocumentariesMovies = () => {
    return async (dispatch) => {
        const resp = await netflixDocumentariesMoviesFetch();
        dispatch(documentariesMovies(resp.results));
    };
}
// FIN DOCUMENTARIES MOVIES


