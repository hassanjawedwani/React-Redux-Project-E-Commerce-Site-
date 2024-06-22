import React, { useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem('userInfo') ? navigate('/addproduct') : navigate('/login')
  }, []);
  return (
    <div>
      <Header />
      <h1>Login</h1>
    </div>
  );
};

export default Login;