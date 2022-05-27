import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { netflixActionMovies } from '../../actions/netflixData';

export const ActionsMovies = () => {
    const dispatch = useDispatch();
    const { actionMovies } = useSelector(state => state.netflixData);

    useEffect(()=>{
        dispatch(netflixActionMovies());
    },[dispatch])

    return (
        <>
            <h1 className="name-movies-netflix-h1">
                Action Movies
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
                    slidesPerGroup: 3
                  },
                  350: {
                      slidesPerView: 2,
                      slidesPerGroup: 1
                  }
              }}
            >
                <>
                    {actionMovies.map(action => (
                        <SwiperSlide key={action.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${action?.backdrop_path || action?.poster_path}`} 
                                alt="pic" 
                                className="netflix-movies-img" 
                            />
                        </SwiperSlide>
                    ))
                    }
                </>
            </Swiper>
        </>
    )
}



