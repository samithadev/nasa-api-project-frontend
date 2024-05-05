import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !name.trim()) {
      alert("Please fill in all the required fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://nasa-api-project-backend.onrender.com/user/createUser",
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);
      // Handle success, e.g., show a success message or redirect
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error creating user:", error.response.data);
      // Handle error, e.g., show an error message
      alert("error register");
    }
  };

  const handleLoginClick = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="absolute w-full h-full z-[-1]">
        <img src="/bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col w-full items-center border-solid max-w-[350px] mx-8 py-6 rounded-xl border-4  bg-white">
        <div className=" py-4">
          <h1 className=" font-bold text-2xl flex items-center justify-center ">
            Register
          </h1>
        </div>
        <form onSubmit={handleSubmit} role="form">
          <label htmlFor="email">Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full my-4 border-solid border-2 p-2"
            placeholder="Name"
            required
          />
          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full my-4 border-solid border-2 p-2"
            placeholder="Email Address"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full my-4 border-solid border-2 p-2"
            placeholder="Password"
            required
          />
          <br />

          <button
            type="submit"
            className=" p-2 bg-red-600 text-white rounded-lg w-full my-4"
          >
            Register
          </button>
          <button
            onClick={handleLoginClick}
            className=" p-2 bg-slate-500 text-white rounded-lg w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
