import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
export default class Default extends Component {
  render() {
    return (
      <div>
        Default
        <Outlet />
      </div>
    )
  }
}
