import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class Guest extends Component {
  render() {
    return (
      <div>
        Guest
        <Outlet />
      </div>
    )
  }
}
