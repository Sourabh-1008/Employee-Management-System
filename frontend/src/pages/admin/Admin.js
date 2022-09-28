import React from 'react'
import { Link } from 'react-router-dom';
function Admin() {
  return (
    <>
      <section className='content'>
        <div className='goals'>
          <div className='goal'>
            <div>User</div>
            <h2><Link to={'/allUsers'}>List</Link></h2>
          </div>
          <div className='goal'>
            <div>All Employee</div>
            <h2><Link to={'/allEmployee'}>List</Link></h2>
          </div>
          <div className='goal'>
            <div>Add New</div>
            <h2><Link to={'/addJobs'}>Jobs</Link></h2>
          </div>
          <div className='goal'>
            <div>All Jobs</div>
            <h2><Link to={'/jobList'}>List</Link></h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admin