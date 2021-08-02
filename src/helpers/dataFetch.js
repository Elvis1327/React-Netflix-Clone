import axios from 'axios';

const APIKEY = 'c100ffd12fc3617bc3c4f8f7ea819fe3';
const categoryMovies = {
    horrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27&language=es-ES`,
    comedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35&language=es-ES`,
    actionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28&language=es-ES`,
    romanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10749&language=es-ES`,
    documentariesMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=99&language=es-ES`
};

export const allMovies = async () => {
    const { data } = await axios.get(categoryMovies.horrorMovies);
    return data;
}

export const netflixComedyMoviesFetch = async () => {
    const { data } = await axios.get(categoryMovies.comedyMovies);
    return data;
}

export const netflixActionMoviesFetch = async () => {
    const { data } = await axios.get(categoryMovies.actionMovies);
    return data;
}

export const netflixRomanceMoviesFetch = async () => {
    const { data } = await axios.get(categoryMovies.romanceMovies);
    return data;
}

export const netflixDocumentariesMoviesFetch = async () => {
    const { data } = await axios.get(categoryMovies.documentariesMovies);
    return data;
}




