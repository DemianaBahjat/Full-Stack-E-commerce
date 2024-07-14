import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

export default function AuthProtectedRoute({ children }) {
    const {userIsLoggedIn } = useContext(authContext)
    return (
        <>
            {userIsLoggedIn ? <Navigate to={'/home'} /> : children}
=        </>
    )
}
