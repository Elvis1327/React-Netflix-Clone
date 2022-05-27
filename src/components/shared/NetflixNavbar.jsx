import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authLogoutAccount } from '../../actions/authActions';

export const NetflixNavbar = () => {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [ netflixToggle, setNetflixToggle ] = useState(false);

    const handleToggleNetflix = () => {
        setNetflixToggle(!netflixToggle);
    };

    const handleLogoutNetflix = () => {
        dispatch(authLogoutAccount())
    }

    return (
        <header className="header-netflix">

            <h1 className="h1-main-navbar">Elvis Movies</h1>
            <div className="navbar-users-icon-netflix" onClick={handleToggleNetflix}>
                <img src="https://res.cloudinary.com/dtp3gqean/image/upload/v1627919965/Netflix-avatar_jjshxw.png" alt="pic" />
                <i class="fas fa-caret-down"></i>

                {netflixToggle &&
                    <div className="_toggle-account-netflix">
                        <ul className="netflix-toggle-ul">
                            <li className="netflix-toggle-li">
                                <h1> {user.name} </h1>
                            </li>
                            <li className="netflix-toggle-li" onClick={handleLogoutNetflix}>
                                <button className="toggle-account-netflix-button">
                                Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                }
                
            </div>
            
        </header>
    )
}
