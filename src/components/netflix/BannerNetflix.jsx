import React from 'react';
import { useSelector } from 'react-redux';
import { NetflixNavbar } from '../shared/NetflixNavbar';

export const BannerNetflix = () => {
    const {data} = useSelector(state => state.netflixData);
    const aleatory = data[Math.floor(Math.random() * data.length + 1)]

    return (
        <div className="banner-netflix-container">
            <div 
                className="banner-img-netflix"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${aleatory?.backdrop_path})`
                }}
            >

            <NetflixNavbar />

            <div className="_banner-netflix-info">
                <h1 className="banner-netflix-name-h1">
                    {aleatory?.title}
                </h1>
                <div className="banner-netflix-buttons">

                    <button className="netflix-movies-buttons-reproducir">
                        <i className="fas fa-play"></i>
                        Play
                    </button>
                    <button className="netflix-movies-buttons-info">
                        More Information
                    </button>
                    
                </div>
                <div className="netflix-movie-about">
                    <p>
                        {`${aleatory?.overview.substring(0,100)}....`}
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};



