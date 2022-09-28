import React from 'react'
import { useState } from 'react';
import { FaUser } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function EmployeeAdd() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [education, setEducation] = useState();
  const [position, setPosition] = useState();
  const [company, setCompany] = useState();
  const [error, setError] = useState(false);
  const [joblist, setJobs] = useState([]);
  const navigate = useNavigate()
  //console.log(name,email, education,position,company)
  const userID = JSON.parse(localStorage.getItem('user'))._id;
  //console.log(userID)
  const tokess = JSON.parse(localStorage.getItem('user')).token;
  //console.log(tokess)
//   useEffect(async() => {
//     getJobs();
//   }, []);
//   const getJobs = async () => {
//     let result = await fetch(`http://localhost:5000/api/jobs`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization':`Bearer ${tokess}`
//           }
//     });
//     const data = await result.json();
//     console.log(data.position)
//     setJobs(data.position)
// }
  const employeeadd = async (e) => {
    e.preventDefault();
    if (!name || !email || !education || !position || !company) {
      setError(true)
      return false
    }
    let result = await fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      body: JSON.stringify({ name, email, education, position, company, userID }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${tokess}`
      }
    });
    result = await result.json();
    navigate('/employeeList')
    console.log(result)
  }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Employee Details
        </h1>
        {/* <p>Please ente an account</p> */}
      </section>

      <section className='form'>
        <form onSubmit={employeeadd}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='names'
              name='names'
              //value={names}
              placeholder='Enter Employee Name'
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
              placeholder='Enter Employee Email'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='position'
              name='position'
              //value={email}
              placeholder='Enter Employee Position'
              onChange={e => setPosition(e.target.value)}
            />
           {/* <select
            type='text'
            name='position'
            id='position'
            value={joblist}
            placeholder='Select user name'
            onChange={e => setJobs(e.target.value)}
            >
              {joblist.map((item,i)=>{
                 return (
                  <option key={i} value={item.id}>{item.name}</option>
                )
              })}
            </select> */}
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='education'
              name='education'
              //value={email}
              placeholder='Enter Employee Education'
              onChange={e => setEducation(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='company'
              name='company'
              //value={email}
              placeholder='Enter Employee Company'
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

export default EmployeeAdd