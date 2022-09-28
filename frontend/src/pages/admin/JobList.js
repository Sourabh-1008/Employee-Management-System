import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function JobList() {
    const [joblist, setJobs] = useState([]);
    useEffect(() => {
        getJobs();
    }, []);
    const tokess = JSON.parse(localStorage.getItem('user')).token;
    const deleteJobs= async(id) =>{
        //console.log(id)
        let result = await fetch(`http://localhost:5000/api/jobs/${id}`,{
        method:'Delete',    
        headers:{
                'Accept': 'application/json',
                'Authorization':`Bearer ${tokess}`
            }
        });
        result = await result.json();
        if(result){
            getJobs();
        }
       } 
    const getJobs = async () => {
        let result = await fetch('http://localhost:5000/api/jobs', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${tokess}`
              }
        });
        result = await result.json();
        setJobs(result)
    }
    //console.warn(joblist)
    return (
        <div>
            <h3></h3>
            <table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Position</th>
                        <th>Jobs Details</th>
                        <th>Company</th>
                        <th>Opration</th>
                    </tr>
                </thead>
                <tbody>

                    {joblist.map((item,index) => {
                        return (
                            <tr  key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.position}</td>
                                <td>{item.jobdetails}</td>
                                <td>{item.company}</td>
                                <td>
                                    <button className='btn-smalls btn-small' onClick={() => deleteJobs(item._id)}> Delete</button>
                                    {/* <Link to={'/employeeUpdate/'+item._id}>Update</Link> */}
                                    </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default JobList