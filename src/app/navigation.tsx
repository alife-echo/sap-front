import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './screens/Login';
import Register from './screens/Register';
import RetrieveAccount from './screens/RetrieveAccount';
import Home from './screens/Home';
import ConfirmCodeEmail from './screens/ConfirmCodeEmail';
function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/confirm-email' element={<ConfirmCodeEmail/>}/>
        <Route path="/retrieve-account" element={<RetrieveAccount/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default Navigation;
