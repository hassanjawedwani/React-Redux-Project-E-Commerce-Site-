import React, { useEffect, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router";
import Header from "./Header";
const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handlerEmail = (e) => {
    setData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const handlerPassword = (e) => {
    setData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };

  const AddApi = async () => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response) {
      throw new Error("Error in adding data in API");
    }
  };

  const handlerSubmit = async (e) => {
    try {
      e.preventDefault();
      await AddApi();
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/addproduct");
    } catch (error) {
      console.error("error occured in submition", error);
    }
  };

  useEffect(() => {
    localStorage.getItem('userInfo') ? navigate('/addproduct') : navigate('/register')
  }, []);

  return (
    <>
      <Header />
      <form onSubmit={handlerSubmit}>
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Enter email address"
          onChange={handlerEmail}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={handlerPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
