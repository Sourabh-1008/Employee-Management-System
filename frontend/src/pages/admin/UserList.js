import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
function UserList() {
   
    const [user,setUser] = useState([]);
    useEffect(() => {
        getUser();
    }, []);
    const getUser = async () => {
        let result = await fetch('http://localhost:5000/api/users/userlist', {
            method:"GET"
        });
        result = await result.json();
        //console.log(result.isAdmin === false)
        //result.isAdmin === false ? setUser(result):console.log('Nodata')
        setUser(result)
        localStorage.setItem('jobs',JSON.stringify(result))
    }
  return (
    <div>
    <h3></h3>
    <table>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>

            {user.map((item,index) => {
                return (
                    <tr  key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        {/* <td><Link to={'/addJobs/'+item._id}>Add Jobs</Link></td> */}
                    </tr>
                )
            })}
        </tbody>
    </table>
</div>
  )
}

export default UserList