import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { netflixComedyMovies } from '../../actions/netflixData';


export const ComedyMovies = () => {
    const dispatch = useDispatch();
    const { comedyMovies } = useSelector(state => state.netflixData);

    useEffect(()=>{
        dispatch(netflixComedyMovies());
    },[dispatch]);

    return (
        <>
            <h1 className="name-movies-netflix-h1">
                Comedy Movies
            </h1>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              navigation={true}
              speed={1000}
              className="_swiper-component"
              breakpoints={{
                1000: {
                    slidesPerView: 5,
                    slidesPerGroup: 5
                },
                800: {
                  slidesPerView: 4,
                  slidesPerGroup: 4
                },
                  500: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  speed: 400
                },
                350: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    speed: 400
                }
            }}
            >
                <>
                    {comedyMovies.map(comedy => (
                        <SwiperSlide key={comedy.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${comedy?.backdrop_path}`} 
                                alt="pic" 
                                className="netflix-movies-img" 
                            />
                        </SwiperSlide>
                    ))}
                </>
            </Swiper>
        </>
    )
}


