import React from "react";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../css/hero.css";

const Home = () => {
  return (
    <>
      {/*main page content */}

      <div>
        <Hero />
      </div>

      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
