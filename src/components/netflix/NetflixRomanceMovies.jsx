import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { netflixRomancesMovies } from '../../actions/netflixData';

export const RomcanceMovies = () => {
    
    const dispatch = useDispatch();
    const { romanceMovies } = useSelector(state => state.netflixData);

    const imgNotFound = 'https://res.cloudinary.com/dtp3gqean/image/upload/v1627913888/notfound_xyfmfb.png';

    useEffect(()=>{
        dispatch(netflixRomancesMovies());
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
                    {romanceMovies.map(romance => (
                        <SwiperSlide key={romance.id}>
                            <img 
                            src={`${(romance?.poster_path === null) 
                                ? (imgNotFound) 
                                : (`https://image.tmdb.org/t/p/original${romance?.backdrop_path || romance?.poster_path}`) }`} 
                            alt="pic" 
                            className="netflix-movies-img" />
                        </SwiperSlide>
                    ))}
                </>
            </Swiper>
        </>
    )
}



