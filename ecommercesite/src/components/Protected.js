import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Protected = (props) => {
    const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem('userInfo') ? navigate(props.cmp) : navigate('/login')
  }, []);
  return (
    <div>
        <props.cmp />
    </div>
  );
};

export default Protected;