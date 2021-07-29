import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { validarToken } from '../actions/authActions';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { NetflixScreen } from '../components/netflix/NetflixScreen';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
    const dispatch = useDispatch();
    const { check } = useSelector(state => state.auth)

    useEffect(()=>{
        dispatch(validarToken());
    },[dispatch])

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login" 
                        component={Login}
                        isAuthenticated={check}
                    />

                    <PublicRoute
                        exact 
                        path="/register" 
                        component={Register}
                        isAuthenticated={check}
                    />

                    <PrivateRoute
                        exact
                        path="/netflixscreen"
                        component={NetflixScreen}
                        isAuthenticated={check}
                    />
                    
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}



