import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/loginpage'
import CreateLoginPage from './pages/createloginpage'
import ForgetpasswordPage from './pages/forgotpassword'
import PasswordValidtion from './component/passwordvalid'
import ResetPassword from './pages/resetpassword'
import Superadmin from './pages/dashboard'
import Adminblog from './pages/adminblog'
import AdmincContactForm from './pages/admincontactus'


function App() {
  const [count, setCount] = useState(0)

  return (
   
      <Routes>
        {/* Home route */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Login route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createloginpage" element={<CreateLoginPage />} />
        <Route path="/forgotpassword" element={<ForgetpasswordPage />} />
        <Route path="/passwordvalidtion" element={<PasswordValidtion/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/dashboard" element={<Superadmin/>} />
          <Route path="/Adminblog" element={<Adminblog/>} />
          <Route path="/AdmincContactForm" element={<AdmincContactForm/>} />
      </Routes>
    
  )
}

export default App
