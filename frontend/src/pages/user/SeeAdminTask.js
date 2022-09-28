import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SeeAdminTask() {
    const [joblist, setJobs] = useState([]);
    useEffect(() => {
        getJobs();
    }, []);
    
    const auth = JSON.parse(localStorage.getItem('user')).name
    console.log(auth);
    const tokess = JSON.parse(localStorage.getItem('user')).token;
    const getJobs = async () => {
        let result = await fetch(`http://localhost:5000/api/jobs`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${tokess}`
              }
        });
        result = await result.json();
        setJobs(result)
        localStorage.setItem('seetask',JSON.stringify(result))
    }
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
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    {joblist.filter(data => data.name === auth)
                    .map((item,index) => {
                        return (
                            <tr  key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.position}</td>
                                <td>{item.jobdetails}</td>
                                <td>{item.company}</td>
                                <td>{new Date(item.createdAt).toLocaleString('en-US')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SeeAdminTask