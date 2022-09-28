import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function EmployeeList() {
    const [employeelist, setEmployee] = useState([]);
    useEffect(() => {
        getEmployee();
    }, []);
    //const userID = JSON.parse(localStorage.getItem('user'))._id;
    //console.log(userID)
    const tokess = JSON.parse(localStorage.getItem('user')).token;
    //console.log(tokess)
   const deleteEmployee = async(id) =>{
    //console.log(id)
    let result = await fetch(`http://localhost:5000/api/employees/${id}`,{
    method:'Delete',    
    headers:{
            'Accept': 'application/json',
            'Authorization':`Bearer ${tokess}`
        }
    });
    result = await result.json();
    if(result){
        getEmployee();
    }
   } 
   
    const getEmployee = async () => {
        let result = await fetch('http://localhost:5000/api/employees', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${tokess}`
              }
        });
        result = await result.json();
        setEmployee(result)
    }
    //console.warn(employeelist)
    return (
        <div>
            <h3></h3>
            <table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Education</th>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Opration</th>
                    </tr>
                </thead>
                <tbody>

                    {employeelist.map((item,index) => {
                        return (
                            <tr  key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.position}</td>
                                <td>{item.education}</td>
                                <td>{item.company}</td>
                                <td>{new Date(item.createdAt).toLocaleString('en-US')}</td>
                                <td>
                                    <button className='btn-smalls btn-small' onClick={() => deleteEmployee(item._id)}> Delete</button>
                                    <Link className='btn-smalls btn-small-update' to={'/employeeUpdate/'+item._id}>Update</Link>
                                    </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList