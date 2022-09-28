import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaUser } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router-dom'

function JobUpdate() {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [position, setPosition] = useState('');
  const [joblist, setJobs] = useState([]);
  const [company, setCompany] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getJobsDetails();
  }, [])


  const tokess = JSON.parse(localStorage.getItem('user')).token;
  const getJobsDetails = async () => {
    let result = await fetch(`http://localhost:5000/api/employees/${params.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokess}`
      }
    });
    result = await result.json();
    console.warn(result)
    setName(result.name)
    setSalary(result.salary)
    setPosition(result.position)
    setJobs(result.joblist)
    setCompany(result.company)
  }
  const UpdateJobs = async (id) => {
    let result = await fetch(`http://localhost:5000/api/employees/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, salary, position,joblist, company }),
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
          <FaUser /> Employee Update
        </h1>
        {/* <p>Please ente an account</p> */}
      </section>

      <section className='form'>
        <form onSubmit={UpdateJobs}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='salary'
              name='salary'
              value={salary}
              placeholder='Enter your email'
              onChange={(e) => setSalary(e.target.value)}
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
              id='jobde'
              name='education'
              value={education}
              placeholder='Enter your education'
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
              placeholder='Enter your company'
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

export default JobUpdate