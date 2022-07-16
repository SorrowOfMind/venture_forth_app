import React from 'react';
import {Routes, Route} from 'react-router-dom';

// import {ProtectedRoute} from './ProtectedRoute';
import Home from '../components/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const RoutesHandler: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* <Route path="/dashboard" element={<ProtectedRoute isAuth={false}><Dashboard/></ProtectedRoute>}/> */}
    </Routes>
  )
}

export default RoutesHandler;