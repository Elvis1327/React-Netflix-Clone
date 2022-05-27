import React from 'react';
import { render } from 'react-dom';
import { NetflixApp } from './NetflixApp';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import './styles/styles.scss';

const main = document.querySelector('#root');
render(
    <NetflixApp />,
    main
)




