import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill in all the required fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://nasa-api-project-backend.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      console.log(response);

      const { token } = response.data;
      localStorage.setItem("token", token);

      navigate("/main/home");

      console.log(response.data);
      // Handle successful login, e.g., redirect to dashboard
      alert("login successfull!!");
    } catch (error) {
      alert("Not registerd User!");
      console.error("Error logging in:", error.response.data);
      // Handle error, e.g., show an error message
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="absolute w-full h-full z-[-1]">
        <img src="/bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center w-full max-w-[300px] mx-8 py-6 border-solid rounded-xl border-4  bg-white">
        <div className=" py-4">
          <h1 className=" font-bold text-2xl flex items-center justify-center">
            Login
          </h1>
        </div>
        <form onSubmit={handleSubmit} className=" w-full px-9">
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            id="email"
            className="w-full my-4 border-solid border-2 p-2"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            className="w-full my-4 border-solid border-2 p-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button
            type="submit"
            className=" p-2 bg-blue-600 text-white rounded-lg w-full my-4"
          >
            LogIn
          </button>
          <button
            onClick={handleRegisterClick}
            className=" p-2 bg-red-600 text-white rounded-lg w-full "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
