import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { netflixDocumentariesMovies } from '../../actions/netflixData';

export const DocumentariesNetflix = () => {
    const dispatch = useDispatch();
    const { documentariesMovies } = useSelector(state => state.netflixData);
    const [ paginate, setPaginate ] = useState(0); 

    useEffect(() =>{
        dispatch(netflixDocumentariesMovies());
    }, [dispatch])


    const paginateMovies = (number) => {
        const $movies = documentariesMovies.slice(number, number + 5)
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
                Documentaries Movies
            </h1>
            <div className="netflix-movies">
                <button onClick={handlePrevPage} className="buttons-paginate-netflix" disabled={paginate < 0}>
                    <i className="fas fa-chevron-circle-left"></i>
                </button>
                {result.map(documentaries => (
                    <div key={documentaries.id}>
                            <img src={`https://image.tmdb.org/t/p/original${documentaries?.backdrop_path || documentaries?.poster_path}`} alt="pic" className="netflix-movies-img" />
                        
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






