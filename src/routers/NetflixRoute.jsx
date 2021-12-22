import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NetflixScreen } from '../components/netflix/NetflixScreen'

export const NetflixRoute = () => {
    return (
        <div>
            <Routes>
                <Route 
                    path="netflix-screen" 
                    element={<NetflixScreen />}
                />
            </Routes>
        </div>
    )
}
