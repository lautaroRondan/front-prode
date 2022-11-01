import React from 'react'
import { Navigate, Outlet } from 'react-router'
import {useAuthContext} from '../components/context/AuthContext'

export default function PublicRoute() {

    const {isAuthenticated} = useAuthContext()

    if(isAuthenticated) {
        return <Navigate to='/prode/inicio'/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}
