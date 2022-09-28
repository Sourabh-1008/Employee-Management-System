import { FaSignInAlt, FaUser, FaHouseUser, FaSignOutAlt } from 'react-icons/fa'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
    const auth = localStorage.getItem('user')
    const admins = localStorage.getItem('admin')
    console.warn(auth)
    //console.warn(admins)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate('/register')
    }
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Hr Management</Link>
            </div>
            {
                auth ?
                    admins ? <ul>
                                <li><Link to='/admin'><FaHouseUser />Admin Dashboard </Link></li>
                                <li><Link onClick={logout} to='/register'><FaSignOutAlt />Logout </Link></li>
                            </ul>
                        : <ul>
                            <li><Link to='/dashbord'><FaHouseUser />User Dashboard </Link></li>
                            {/* <li><Link to='/employeeAdd'><FaHouseUser />EmployeeAdd</Link></li>
                            <li><Link to='/employeeList'><FaHouseUser />EmployeeList</Link></li> */}
                            <li><Link onClick={logout} to='/register'><FaSignOutAlt />Logout </Link></li>
                        </ul>
                    :
                    <ul>
                        <li><Link to='/login'><FaSignInAlt />Login</Link></li>
                        <li><Link to='/register'><FaUser />Register</Link></li>
                    </ul>
            }
        </header>
    )
}

export default Header
