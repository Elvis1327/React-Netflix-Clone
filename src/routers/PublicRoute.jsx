import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated === false)
                ? <Component {...props} />
                : <Redirect to="/netflixscreen" />
            )}
        />
    )
}

PublicRoute.prototype = {
    isAuthenticated: Proptypes.bool.isRequired
};


