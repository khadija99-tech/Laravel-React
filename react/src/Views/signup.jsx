import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <div>
        <div className='content'>
          <div>
            <img id='logo' src='\public\output-onlinepngtools.png'></img>
            <h1 align='center' id='login'>Sign Up</h1>
          </div>
          <form className='.login-signup-form '>
            <input type='name' placeholder='enter your name'></input>
            <input type='email' placeholder='enter your email'></input>
            <input type='password' placeholder='enter your password'></input>
          </form>
          <div>
            <button className='btn'>Sign Up</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
