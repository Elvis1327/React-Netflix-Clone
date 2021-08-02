import { TYPES } from "../types/types";

const initialState = {
    data: [],
    comedyMovies: [],
    actionMovies: [],
    romanceMovies: [],
    documentariesMovies: []
};


export const netflixReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.netflixMoviesData:
            return {
                ...state,
                data: action.payload
            };
        case TYPES.netflixComedyMovies:
            return {
                ...state,
                comedyMovies: action.payload
            };
        case TYPES.netflixActionMovies:
            return {
                ...state,
                actionMovies: action.payload
            };
        case TYPES.netflixRomanceMovies:
            return {
                ...state,
                romanceMovies: action.payload
            };
        case TYPES.netflixDocumentaries:
            return {
                ...state,
                documentariesMovies: action.payload
            }

        default:
            return state
    }
}


