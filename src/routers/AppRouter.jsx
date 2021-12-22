import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { validarToken } from '../actions/authActions';
import { AuthRoute } from './AuthRoute';
import { NetflixRoute } from './NetflixRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(validarToken());
    },[dispatch])

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        path="netflix/*"
                        element={
                            <PrivateRoute>
                                <NetflixRoute />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/*" 
                        element={
                            <PublicRoute>
                                <AuthRoute />
                            </PublicRoute>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}



