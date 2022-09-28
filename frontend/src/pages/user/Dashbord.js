import React from 'react'
import { Link } from 'react-router-dom';
function Dashbord() {
  return (
    <>
    <section className='content'>
      <div className='goals'>
        <div className='goal'>
          <div>See Admin Task</div>
          <h2><Link to={'/seeadmintack'}>List</Link></h2>
        </div>
        <div className='goal'>
          <div>Add Employee</div>
          <h2><Link to={'/employeeAdd'}>List</Link></h2>
        </div>
        <div className='goal'>
          <div>Employee</div>
          <h2><Link to={'/employeeList'}>Jobs</Link></h2>
        </div>
        {/* <div className='goal'>
          <div>All Jobs</div>
          <h2><Link to={'/d'}>List</Link></h2>
        </div> */}
      </div>
    </section>
  </>
  )
}

export default Dashbord