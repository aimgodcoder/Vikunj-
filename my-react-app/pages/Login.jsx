import React from "react";
import "../css/login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useContext, createContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../src/main";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const navigateTo = useNavigate();

    const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          // add token to local storage or context if needed
          localStorage.setItem("token", res.data.token);
          console.log(localStorage.getItem("token"));
          navigateTo("/");
          setEmail("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };


  return (
    <div className="login">
      <div className="flex justify-center items-center min-h-screen">
        <div className="login-container bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <div className="text-center mb-4 flex flex-col items-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Welcome"
              className="welcome-image mx-auto"
            />
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-sm text-gray-400">
              You can use the user 'demo' and password 'demo' to login. This is
              a demo instance and will reset at irregular intervals. Do not use
              this for real data.
            </p>
          </div>
          <div className="text-center flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <p className="text-sm text-blue-400 mb-4">
              Using Vikunja installation at try.vikunja.io{" "}
              <a href="#" className="underline">
                change
              </a>
            </p>
            <form className="flex flex-col items-center w-full" onSubmit={handleLogin}>
              <div className="mb-4 w-full flex justify-center">
                <input
                  type="text"
                  placeholder="Username or Email Address"
                  defaultValue=""
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded text-center"
                />
              </div>
              <div className="mb-4 relative w-full flex justify-center">
                <input
                  type="password"
                  placeholder="Password"
                  defaultValue=""
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded text-center"
                />
                <a
                  href="#"
                  className="absolute right-2 top-2 text-blue-400 text-sm"
                  style={{ marginBottom: "2rem" }}
                >
                  Forgot your password?
                </a>
              </div>
              <div className="mb-4 w-full flex justify-center">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Stay logged in
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                LOGIN
              </button>
              <p className="text-sm text-blue-400 mt-4 text-center">
                Don't have an account yet ?{" "}
                <a href="/register" className="underline">
                  Create account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
