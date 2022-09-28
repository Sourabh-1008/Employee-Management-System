import React from 'react'
import { useState,useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function JobsAdd() {
  const [salary, setSalary] = useState();
  const [position, setPosition] = useState();
  const [jobdetails, setJobdetails] = useState();
  const [company, setCompany] = useState();
  const [error, setError] = useState(false);
  const [name, setUser] = useState([]);
  const userID = JSON.parse(localStorage.getItem('user'))._id;
  const tokess = JSON.parse(localStorage.getItem('user')).token;
  const jobsdata = JSON.parse(localStorage.getItem('jobs'))
  const navigate = useNavigate()
  console.warn("Jobs",tokess)
  const handleAddjobs = async(e) => {
    e.preventDefault();
    if(!name || !salary || !position || !jobdetails || !company){
      setError(true)
      return false
    }
    let result = await fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      body: JSON.stringify({ name,salary,position,jobdetails,company,userID}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':`Bearer ${tokess}`
      }
    });
    result = await result.json();
    navigate('/jobList')
    console.log(result)
  }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Add Jobs Details
        </h1>
        {/* <p>Please ente an account</p> */}
      </section>

      <section className='form'>
        <form onSubmit={handleAddjobs}>
        <div className='form-group'>
            <select
            type='text'
            name='name'
            id='name'
            placeholder='Select user name'
            onChange={e => setUser(e.target.value)}
            >
              {jobsdata.map((item,i)=>{
                 return (
                  <option key={i} value={item.id}>{item.name}</option>
                )
              })}
            </select>
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='salary'
              name='salary'
              //value={email}
              placeholder='Enter Package'
              onChange={e => setSalary(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='position'
              name='position'
              //value={email}
              placeholder='Enter Position'
              onChange={e => setPosition(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='jobdetails'
              name='jobdetails'
              //value={email}
              placeholder='Enter Job Details'
              onChange={e => setJobdetails(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='company'
              name='company'
              //value={email}
              placeholder='Enter Company'
              onChange={e => setCompany(e.target.value)}
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

export default JobsAdd