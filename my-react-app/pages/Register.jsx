import React from "react";
import RegisterForm from "../components/registerform";
import Vikunj from "../components/vikunj";
import "../css/register.css";


const Register = () => {
  return (
    <>
      <div>
        <Vikunj />
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginLeft: "0rem",
        }}
      >
        <div>
          <img
            src="../assets/lama.jpg"
            alt="lama"
            style={{ maxBlockSize: "600px", padding: "0px", margin: "0px" }}
          />
        </div>

        <div style={{ marginRight: "1rem" }}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
