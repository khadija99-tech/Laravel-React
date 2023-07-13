import { Navigate, Outlet } from 'react-router-dom'
import  {useStateContext} from '../contexts/provider'
import React from 'react'

export default function Default() {
  const {user, token} = useStateContext()

  if (!token){
    return <Navigate to ="/login"/>
  }
  return (
    <div>
      Default
          <Outlet />
    </div>
  )
}

