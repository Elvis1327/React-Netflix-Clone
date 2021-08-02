import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { netflixRomancesMovies } from '../../actions/netflixData';

export const RomcanceMovies = () => {

    
    const dispatch = useDispatch();
    const { romanceMovies } = useSelector(state => state.netflixData);
    const [ paginate, setPaginate ] = useState(0);
    console.log(romanceMovies)
    const imgNotFound = 'https://res.cloudinary.com/dtp3gqean/image/upload/v1627913888/notfound_xyfmfb.png';

    useEffect(()=>{
        dispatch(netflixRomancesMovies());
    },[dispatch]);

    const paginateMovies = (number) => {
        const $movies = romanceMovies.slice(number, number + 5)
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
                {result.map(romance => (
                    <div key={romance.id}>
                            <img src={`${(romance?.poster_path === null) ? (imgNotFound) : (`https://image.tmdb.org/t/p/original${romance?.backdrop_path || romance?.poster_path}`) }  `} alt="pic" className="netflix-movies-img" />
                        
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



