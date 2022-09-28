import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaUser } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router-dom'

function EmployeeUpdate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeDetails();
  }, [])


  const tokess = JSON.parse(localStorage.getItem('user')).token;
  const getEmployeeDetails = async () => {
    let result = await fetch(`http://localhost:5000/api/employees/${params.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokess}`
      }
    });
    result = await result.json();
    console.warn(result)
    setName(result.name)
    setEmail(result.email)
    setEducation(result.education)
    setPosition(result.position)
    setCompany(result.company)
  }
  const UpdateEmployee = async (id) => {
    let result = await fetch(`http://localhost:5000/api/employees/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, email, education, position, company }),
      headers: {
        'Content-Type': 'Application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${tokess}`
      }
    });
    result = await result.json();
    if (result) {
      navigate('/employeeList')
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Add Employee Update
        </h1>
        {/* <p>Please ente an account</p> */}
      </section>

      <section className='form'>
        <form onSubmit={UpdateEmployee}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter employee name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter employee email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='position'
              name='position'
              value={position}
              placeholder='Enter your position'
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='education'
              name='education'
              value={education}
              placeholder='Enter employee education'
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='company'
              name='company'
              value={company}
              placeholder='Enter employee company'
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Update Employee
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default EmployeeUpdate