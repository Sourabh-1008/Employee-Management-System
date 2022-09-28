import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, csetPassword] = useState();
  //this is navigation on dashbord page
  const navigate = useNavigate()
  useEffect(() =>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/dashbord')
    }
    
  })
  const handleLogin = async (e) => {
    e.preventDefault()
    let result = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      body: JSON.stringify({name,email,password,cpassword}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.log(result)
    localStorage.setItem('user',JSON.stringify(result))
    localStorage.setItem('token',JSON.stringify(result.token))
    if(result){
      navigate('/dashbord')
    }
    //console.log(name,email,password,cpassword)
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='names'
              name='names'
              //value={names}
              placeholder='Enter your name'
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              //value={email}
              placeholder='Enter your email'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              //value={password}
              placeholder='Enter password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              //value={password2}
              placeholder='Confirm password'
              onChange={e => csetPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register