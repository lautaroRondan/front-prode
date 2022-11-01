import React from 'react'
import { Navigate, Outlet } from 'react-router'
import {useAuthContext} from '../components/context/AuthContext'

export default function PrivateRoute() {
    const {isAuthenticated} = useAuthContext()

    if(!isAuthenticated) {
        return <Navigate to='/login'/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}
