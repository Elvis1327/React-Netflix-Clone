import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const PublicRoute = ({children}) => {

    const { check } = useSelector(state => state.auth)

    return (
        <>
            {check === false
                ? (children)
                : (<Navigate to="/netflix/netflix-screen" />)
            }
        </>
    )
}



