import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className='content'>
          <div>
            <img id='logo' src='\public\output-onlinepngtools.png'></img>
            <h1 align='center' id='login'>LOGIN</h1>
          </div>
          <form className='.login-signup-form '>
            <input type='email' placeholder='enter your email'></input>
            <input type='password' placeholder='enter your password'></input>
          </form>
          <div>
            <h4>forgot password ?</h4>
            <button className='btn'>LOGIN</button>
          </div>
        </div>
      </div>
    )
  }
}
