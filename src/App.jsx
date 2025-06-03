import React from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import AccountSettings from './pages/AccountSettings'
import Home from './pages/Home'
import './App.css'

// AnimatedRoutes handles route transitions and renders the correct page based on the URL
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      {/* Home page route */}
      <Route path="/" element={<Home />} />
      {/* Login page route */}
      <Route path="/login" element={<Login />} />
      {/* Sign Up page route */}
      <Route path="/signup" element={<SignUp />} />
      {/* Account Settings page route */}
      <Route path="/account-settings" element={<AccountSettings />} />
    </Routes>
  );
};

// App is the root component that sets up the router
const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App