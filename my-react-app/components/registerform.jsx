import axios from "axios";
import { useEffect, useContext, createContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../css/hero.css";
import { Context } from "../src/main";


const RegisterForm = () => {

  

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/register",
          { firstName, email, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setEmail("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="form" style={{ fontSize: "1.2rem", padding: "20px" }}>
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>

        <form onSubmit={handleRegistration}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 5, marginTop: 4 }}>Already Registered?</p>
            <Link
              to={"/login"}
              style={{
                textDecoration: "none",
                color: "black",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "5px",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              Login Now
            </Link>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
