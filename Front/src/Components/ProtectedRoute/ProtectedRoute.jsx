import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext';
import Login from '../Login/Login';

export default function ProtectedRoute({ children }) {
    const { userIsLoggedIn  } = useContext(authContext)

    return (
        <>
            {userIsLoggedIn ? children : <Login />}
        </>
    )
}
