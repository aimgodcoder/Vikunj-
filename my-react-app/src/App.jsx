import { useEffect,useState,useContext} from "react";
import "./App.css";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "../pages/projects";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Overview from "../pages/overview";
import Favourites from "../pages/favourites";
import Inbox from "../pages/Inbox";
import Label from "../pages/label";
import axios from "axios";
import { Context } from "./main";

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/profile",
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
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
  

  if (isAuthenticated) {
    return <Overview />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/label" element={<Label />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
