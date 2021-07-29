import React, {useState} from 'react';

export const Questions = () => {
    const [ netflixToggle, setNetflixToggle ] = useState(false);
    const [ netflixToggle2, setNetflixToggle2 ] = useState(false);
    const [ netflixToggle3, setNetflixToggle3 ] = useState(false);

    return (
        <div className="_main-questions-netflix">
            <h1>
            Frequently Asked Questions
            </h1>
            <div className="_buttons-netflix">
                <button 
                    className="boton-netflix-toggle"
                    onClick={() => setNetflixToggle(!netflixToggle)}>
                    What is Elvis Movies?
                    <i className={`${(netflixToggle === false) ? 'fas fa-caret-down' : 'fas fass fa-caret-down'}`}></i>
                </button>
                {/* TOGLE 1 */}
                    {netflixToggle &&
                        <div className="_all-info-netflix-togle">
                            <p>
                            <strong>Elvis Movies</strong> is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            </p>
                            <p>
                            You can watch as much as you want, whenever you want without a single commercial –  all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </p>
                        </div>
                    }
                <button 
                    className="boton-netflix-toggle"
                    onClick={() => setNetflixToggle2(!netflixToggle2)}>
                    How much does Elvis Movies cost?
                    <i className={`${(netflixToggle2 === false) ? 'fas fa-caret-down' : 'fas fass fa-caret-down'}`}></i>
                </button>
                {/* TOGGLE 2 */}
                    {netflixToggle2 &&
                        <div className="_all-info-netflix-togle">
                            <p>
                            Watch <strong>Elvis Movies</strong> on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD13.99 a month. No extra costs, no contracts.
                            </p>
                        </div>
                    }
                <button 
                    className="boton-netflix-toggle"
                    onClick={() => setNetflixToggle3(!netflixToggle3)}>
                    Where can i watch?
                    <i className={`${(netflixToggle3 === false) ? 'fas fa-caret-down' : 'fas fass fa-caret-down'}`}></i>
                </button>
                {/* TOGGLE 3 */}
                    {netflixToggle3 &&
                        <div className="_all-info-netflix-togle">
                            <p>
                            Watch anywhere, anytime, on an unlimited number of devices. Sign in with your <strong>Elvis Movies</strong> account to watch instantly on the web at <strong>Elvis Movies</strong>.com from your personal computer or on any internet-connected device that offers the <strong>Elvis Movies</strong> app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            </p>
                            <p>
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take <strong>Elvis Movies</strong> with you anywhere.
                            </p>
                        </div>
                    }
            </div>
        </div>
    )
}

