import { Link, Navigate, Outlet } from 'react-router-dom'
import  {useStateContext} from '../contexts/provider'
import React from 'react'

export default function Guest() {
  
  const {user,token} = useStateContext();

  // if (token){
  //   return <Navigate to = '/users' />
  // }
    
      return (
        <div id='guest'>
      <aside>
        <Link to ='/login' id='first_a'>Login</Link>
        <Link to ='/signup'>Sign Up</Link>
      </aside>
      <main>
      <Outlet />
      </main>
      
    </div>
      )
    
    
}
