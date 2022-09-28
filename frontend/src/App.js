import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header'

import Home from './component/Home';
import PrivateComponent from './pages/auth/PrivateComponent';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Admin from './pages/admin/Admin';
import Dashbord from './pages/user/Dashbord';
import EmployeeAdd from './pages/user/EmployeeAdd';
import EmployeeList from './pages/user/EmployeeList';
import EmployeeUpdate from './pages/user/EmployeeUpdate';
import AllEmployeeList from './pages/admin/AllEmployeeList';
import JobsAdd from './pages/admin/JobsAdd';
import JobList from './pages/admin/JobList';
import UserList from './pages/admin/UserList';
import SeeAdminTask from './pages/user/SeeAdminTask';
function App() {
  return (
    <>
    <Router>
      <div className='container'>
      <Header/>
        <Routes>
          <Route index path='/' element={ <Home/>} />
          <Route path='/register' element={<Register />} />
          <Route element={ <PrivateComponent/>}>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/allEmployee' element={<AllEmployeeList/>}/>
          <Route path='/allUsers' element={<UserList/>}/>
          <Route path='/addJobs' element={<JobsAdd/>}/>
          <Route path='/jobList' element={<JobList/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/employeeAdd' element={<EmployeeAdd/>}/>
          <Route path='/employeeList' element={<EmployeeList/>}/>
          <Route path='/employeeUpdate/:id' element={<EmployeeUpdate/>}/>
          <Route path='/seeadmintack'element={<SeeAdminTask/>}></Route>
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
