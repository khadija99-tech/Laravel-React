import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/provider'
import React from 'react'

export default function Default() {
  const { user, token } = useStateContext()

  if (!token) {
    return <Navigate to="/login" />
  }
  return (
    <div id='default'>
      <aside>
        <Link to ='/dashboard'>Dashboard</Link>
        <Link to ='/users'>User</Link>
      </aside>

      <div className='content'>
      <header>
        <div>
           user info
        </div>
      </header>
      <main>
      <Outlet />
      </main>
      
      </div>
      
    </div>
  )
}

