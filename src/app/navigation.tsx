import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './screens/Login';
import Register from './screens/Register';
import RetrieveAccount from './screens/RetrieveAccount';
import Home from './screens/Home';
import ConfirmCodeEmail from './screens/ConfirmCodeEmail';
import SuccessfulCreateAccount from './screens/SuccessfulCreateAccount';
import NotAuthorized from './screens/NotAuthorized';
import ValidatedRetrieve from './screens/ValidatedRetrieve';
import SuccessRetrieveAccount from './screens/SuccessRetrieveAccount';
function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/confirm-email' element={<ConfirmCodeEmail/>}/>
        <Route path='/success-create' element={<SuccessfulCreateAccount/>}/>
        <Route path='/not-authorized' element={<NotAuthorized/>}/>
        <Route path="/retrieve-account" element={<RetrieveAccount/>}/>
        <Route path='/validated-retrieve' element={<ValidatedRetrieve/>}/>
        <Route path='/success-retrieve' element={<SuccessRetrieveAccount/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default Navigation;
