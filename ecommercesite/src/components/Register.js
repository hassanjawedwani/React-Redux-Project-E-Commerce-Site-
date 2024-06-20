import React, { useState } from 'react';
import './Register.css';
const Register = () => {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handlerEmail = e => {
    setData(prevData => ({
      ...prevData,
      email: e.target.value
    }))
  }

  const handlerPassword = e => {
    setData(prevData => ({
      ...prevData,
      password: e.target.value
    }))
  }

  const AddApi = async() => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    
    if (!response) {
      throw new Error("Error in adding data in API");
    }
  }

  const handlerSubmit = e => {
    e.preventDefault(); //remove it
    AddApi();
    
  }

  return (
    <form onSubmit={handlerSubmit}>
      <h1>Sign Up</h1>
      <input type="email" placeholder="Enter email address" onChange={handlerEmail} />
      <input type="password" placeholder="Enter password" onChange={handlerPassword}/>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;