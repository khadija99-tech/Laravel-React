import { Navigate, Outlet } from 'react-router-dom'
import  {useStateContext} from '../contexts/provider'
import React from 'react'

export default function Guest() {
  
  const {user,token} = useStateContext();

  if (token){
    return <Navigate to = '/users' />
  }
    
      return (
        <div>
          Guest
          <Outlet />
        </div>
      )
    
}
