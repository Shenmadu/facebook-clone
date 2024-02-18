import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">faceBook</h1>
            <p className="col-lg-10 fs-4">Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address or phone number </label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
              <hr className="my-4" />
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
