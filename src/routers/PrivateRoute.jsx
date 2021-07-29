import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props)=>(
                (isAuthenticated === true)
                ? <Component {...props} />
                : <Redirect to="/login" />
            )}
        />
    )
}
