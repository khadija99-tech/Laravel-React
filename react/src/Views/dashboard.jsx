import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          Dashboard
          <Outlet />
        </div>
      </div>
    )
  }
}
