import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { netflixDocumentariesMovies } from '../../actions/netflixData';
import notFound from '../../assets/notfound.png'

export const DocumentariesNetflix = () => {
    const dispatch = useDispatch();
    const { documentariesMovies } = useSelector(state => state.netflixData);
 

    useEffect(() =>{
        dispatch(netflixDocumentariesMovies());
    }, [dispatch])


    return (
        <div>
            <h1 className="name-movies-netflix-h1">
                Documentaries Movies
            </h1>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              navigation={true}
              className="_swiper-component"
              speed={1000}
              breakpoints={{
                  1000: {
                      slidesPerView: 5,
                      slidesPerGroup: 5
                  },
                  800: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                  },
                    350: {
                    slidesPerView: 2,
                    slidesPerGroup: 1
                  }
              }}
            >    
            <>
                {documentariesMovies.map(documentaries => (
                    <SwiperSlide key={documentaries.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/original${documentaries?.backdrop_path}` || notFound} 
                            alt="pic" 
                            className="netflix-movies-img" /> 
                    </SwiperSlide>
                ))};
            </>
            </Swiper>
        </div>
    )
}






