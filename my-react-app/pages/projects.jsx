import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Header from "../components/Header";

const Projects = () => {
  const label = { inputProps: { "aria-label": "demo" } };

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
        style={{
          height: "91vh",
          width: "80vw",
          padding: "20px",
          marginTop: "75px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70vw",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Show Archieve"
          />
          <div>
            <button style={{ border: "2px solid" }}>+ New Project</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
