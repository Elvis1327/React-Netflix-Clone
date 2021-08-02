import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { netflixComedyMovies } from '../../actions/netflixData';


export const ComedyMovies = () => {
    const dispatch = useDispatch();
    const { comedyMovies } = useSelector(state => state.netflixData);
    const [ paginate, setPaginate ] = useState(0);

    useEffect(()=>{
        dispatch(netflixComedyMovies());
    },[dispatch]);

    const paginateMovies = (number) => {
        const $movies = comedyMovies.slice(number, number + 5)
        return $movies;
    };
    const result = paginateMovies(paginate);

    const handlePrevPage = () => {
        if(paginate > 0){
            setPaginate(paginate - 5)
        };
    };

    const handleNextPage = () => {
        if(paginate <= 20){
            setPaginate(paginate + 5)
        };
    };

    return (
        <div className="netflix-container-movies">
            <h1 className="name-movies-netflix-h1">
                Comedy Movies
            </h1>
            <div className="netflix-movies">
                <button onClick={handlePrevPage} className="buttons-paginate-netflix" disabled={paginate < 0}>
                    <i className="fas fa-chevron-circle-left"></i>
                </button>
                {result.map(comedy => (
                    <div key={comedy.id}>
                            <img src={`https://image.tmdb.org/t/p/original${comedy?.backdrop_path}`} alt="pic" className="netflix-movies-img" />
                        
                    </div>
                ))
                }
                <button onClick={handleNextPage} className="buttons-paginate-netflix" disabled={paginate >= 15}>
                    <i className="fas fa-chevron-circle-right"></i>
                </button>
            </div>
        </div>
    )
}


