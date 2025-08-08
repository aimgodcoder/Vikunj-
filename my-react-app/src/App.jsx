import { useEffect,useState,useContext} from "react";
import "./App.css";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "../pages/projects";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Overview from "../pages/overview";

import Inbox from "../pages/Inbox";

import axios from "axios";
import { Context } from "./main";
import  Teams from "../pages/teams";

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setUser({});
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/profile",
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [setIsAuthenticated, setUser]);
  

    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/overview" element={<Overview />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;
