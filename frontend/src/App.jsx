import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainWebsite } from './MainWebsite';
import { Login } from './Login';
import { Signup } from './Signup';
import './index.css';


function App() {
  return (
    <div style={{margin:0,padding:0}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
