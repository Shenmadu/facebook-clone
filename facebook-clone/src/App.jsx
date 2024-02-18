import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (    
    <div className="container-flex bg-body-tertiary">
      <div className="container col-xl-10 col-xxl-8 px-4 ">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1  mb-3" style={{ color: '#316FF6' }} >facebook</h1>
            <p className="col-lg-10 fs-3">Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className="col-md-10  col-lg-5">
            <form className="p-4 p-md-3 border rounded-3 bg-white mx-auto">
              <div className="form-floating mb-2">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address or phone number </label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="mx-auto text-center">
              
              <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">Log in</button>
              <a href="">Fogotten password?</a>
              <hr className="my-4" />
              <button className="w-60 btn btn-lg btn-success account-btn" type="submit">Create new account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
   
  )
}

export default App
