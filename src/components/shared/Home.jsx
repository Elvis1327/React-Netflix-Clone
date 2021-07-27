import React from 'react'
import { Questions } from './Questions'

export const Home = () => {
    return (
        <div>
            <div className="_card-enjoy-enjoy">
                <div className="_card-enjoy">
                    <div className="_enjoy-netflix">
                        <h1>Enjoy on your TV.</h1>
                        <p>
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </p>
                    </div>
                    <div className="_enjoy-netflix-img">
                        <img src="https://mindlifetv.com/wp-content/uploads/2021/07/Netflix-3-mystery-movies-to-enjoy-on-your-weekend.jpg" alt="pic" />
                    </div>
                </div>
            </div>
            <div className="_shared-divisor"></div>
            {/* SEGUNDO BANNER */}
            <div className="_card-watch-watch">
                <div className="_card-watch">
                    <div className="_watch-netflix-img">
                        <img src="https://www.tuexpertoapps.com/wp-content/uploads/2020/03/netflix-no-es-compatible.jpg.webp" alt="pic" />
                    </div>
                    <div className="_watch-netflix">
                        <h1>Watch everywhere.</h1>
                        <p>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="_shared-divisor"></div>
            <div>
                <Questions />
            </div>
        </div>
    )
}
