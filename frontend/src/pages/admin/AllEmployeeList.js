import React, { useState,useEffect } from 'react'
import { FaUsers } from 'react-icons/fa'
function AllEmployeeList() {
    const [employee,setEmployee] = useState([]);
    useEffect(() => {
        getEmployee();
    }, []);
    const getEmployee = async () => {
        let result = await fetch('http://localhost:5000/api/employees/getAll', {
            method:"GET"
        });
        result = await result.json();
        setEmployee(result)
    }
  return (
    <div>
    <section className='heading'>
        <h1>
          <FaUsers /> All Employees List
        </h1>
        {/* <p>Please ente an account</p> */}
      </section>
    <table>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Education</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>

            {employee.map((item,index) => {
                return (
                    <tr  key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.position}</td>
                        <td>{item.education}</td>
                        <td>{item.company}</td>
                        {/* <td>
                            <button onClick={() => deleteEmployee(item._id)}> Delete</button>
                            <Link to={'/employeeUpdate/'+item._id}>Update</Link>
                            </td> */}
                    </tr>
                )
            })}
        </tbody>
    </table>
</div>
  )
}

export default AllEmployeeList