import React from 'react'
import { useState,useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  useEffect(() =>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/dashbord')
    }
    
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    let result = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    //console.log(result.name)
    if(result.isAdmin){
      localStorage.setItem("user",JSON.stringify(result))
      localStorage.setItem("token",JSON.stringify(result.token))
      localStorage.setItem("admin",JSON.stringify(result.isAdmin))
      navigate('/admin')
    }

    if(result.name && result.isAdmin === false){
      navigate('/dashbord')
      localStorage.setItem("user",JSON.stringify(result))
      localStorage.setItem("token",JSON.stringify(result.token))
      localStorage.setItem("name",JSON.stringify(result.name))
    }
   
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className="form">
        <form onSubmit={handleLogin}>
        {/* {<ErrorNotice message={message} clearError={() => setMessage(undefined)} />} */}
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              //value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              //value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
