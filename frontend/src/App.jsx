import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainWebsite } from './MainWebsite';
import { Login } from './Login';
import { Signup } from './Signup';
import { AdminSignup } from './adminSignup';
import { AdminLogin } from './adminSignin';
import { AdminMainWebsite } from './adminMain';
import './index.css';


function App() {
  return (
    <div style={{margin:0,padding:0}}>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<MainWebsite />} />
          <Route path="/admin" element={<AdminMainWebsite />} />

          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin/signup' element={<AdminSignup />} />
          <Route path='/admin/signin' element={<AdminLogin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
