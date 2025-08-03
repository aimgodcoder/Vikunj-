import React from "react";
import Bar from "../components/bar";
import Bigcard from "../components/bigcard";
import Header from "../components/Header";
import "../css/overview.css";

const Favourites = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Header />
      </div>
      <div
        className="overview"
        style={{ top: 0, left: 0, minWidth: "80%", padding: "20px" }}
      >
        <div>
          <Bar />
        </div>
        <p style={{ margin: 20 }}>Current Tasks</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            backgroundColor: "black",
          }}
        >
          <Bigcard />
        </div>
      </div>
    </>
  );
};

export default Favourites;
