import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainWebsite } from './MainWebsite';
import { Login } from './Login';
import { Signup } from './Signup';
import { AdminSignup } from './adminSignup';
import { AdminLogin } from './adminSignin';
import { AdminMainWebsite } from './adminMain';
import './index.css';
import { useState } from 'react';

function App() {
  const [isDark, setDark] = useState(true);

  return (
    <div className='p-0 m-0 bg-white dark:bg-blue-200'>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<MainWebsite isDark={isDark}  setDark={setDark}/>} />
          <Route path="/admin" element={<AdminMainWebsite isDark={isDark} setDark={setDark}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/signin" element={<AdminLogin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
