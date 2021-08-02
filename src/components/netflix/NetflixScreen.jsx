import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { moviesInfo } from '../../actions/netflixData';
import { Footer } from '../shared/Footer';
import { BannerNetflix } from './BannerNetflix';
import { ActionsMovies } from './NetflixActionsMovies';
import { ComedyMovies } from './NetflixComedyMovies';
import { DocumentariesNetflix } from './NetflixDocumentariesMovies';
import { RomcanceMovies } from './NetflixRomanceMovies';

export const NetflixScreen = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(moviesInfo());

    })

    return (
        <div className="_netflix-main-main-container">
            <div>
                <BannerNetflix />
            </div>
            <div>
                <ComedyMovies />
                <ActionsMovies />
                <RomcanceMovies />
                <DocumentariesNetflix />
            </div>
            <div className="_shared-divisor"></div>
            <div>
                <Footer />
            </div>
        </div>
    )
}


