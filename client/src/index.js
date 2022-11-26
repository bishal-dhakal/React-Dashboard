import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
   <Routes>
    < Route path="/" element={<App/>} />
     < Route path="/login" element={<Login/>} /> 
    < Route path="/signup" element={<Signup/>} />
    < Route path="/dashboard" element={<Dashboard/>} />
    </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

    