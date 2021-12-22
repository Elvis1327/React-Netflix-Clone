import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const PrivateRoute = ({children}) => {

    const { check } = useSelector(state => state.auth)

    return (check === true)
    ? (children) 
    : (<Navigate to="/" />)
}
