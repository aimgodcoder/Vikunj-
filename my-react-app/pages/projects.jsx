import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Header from "../components/Header";
import ProjectForm from "../components/ProjectForm";
import {useEffect,useState} from "react";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/project/getprojects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowForm(false);
      }
    };
    if (showForm) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    }

  
    }, [showForm]);


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
          backgroundColor: "",
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
            label="Show Archive"
          />
          <div>
            <button
              style={{ border: "2px solid" }}
              onClick={() => setShowForm(true)}
            >
              + New Project
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            width: "70vw",
            padding: "20px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project._id}
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            
            </div>
          ))}
        </div>


      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              position: "relative",
              width: "845px", // 650px + 30% = 845px
              minHeight: "400px",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                zIndex: 2,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setShowForm(false)}
                style={{
                  background: "#222",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <ProjectForm />
            </div>
          </div>
        </div>
      )}

      </div>
     
    </>
  );
}

export default Projects;
