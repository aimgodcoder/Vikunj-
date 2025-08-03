import React, { useState } from "react";

const tasks = [
  "Complete project documentation",
  "Review pull requests",
  "Update dependencies",
  "Test new features",
];

export default function TaskList() {
  const [checked, setChecked] = useState(Array(tasks.length).fill(false));

  const handleChange = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  return (
    <div
      style={{
        maxWidth: 1015,
        margin: "2px auto",
        padding: 33.6,
        backgroundColor: 'rgba(257, 257, 257, 0.2)',
        backdropFilter: 'blur(3px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        height: "99%",
        zIndex: 100,
        
      }}
    >
      <h2
        style={{
          marginBottom: 24,
          fontWeight: 600,
          fontSize: 22,
          color: "grey",
        }}
      >
        Task List
      </h2>
      {tasks.map((task, idx) => (
        <label
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 16,
            cursor: "pointer",
            padding: "10px 0",
            borderBottom: idx !== tasks.length - 1 ? "1px solid #eee" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={checked[idx]}
            onChange={() => handleChange(idx)}
            style={{
              accentColor: "#0078d4",
              width: 20,
              height: 20,
              marginRight: 16,
              borderRadius: 6,
              border: "3px solid #ccc",
              boxShadow: checked[idx] ? "0 0 0 2px #0078d4" : "none",
              transition: "box-shadow 0.2s",
            }}
          />
          <span
            style={{
              fontSize: 17,
              color: checked[idx] ? "#aaa" : "black",
              textDecoration: checked[idx] ? "line-through" : "none",
              transition: "color 0.2s, text-decoration 0.2s",
            }}
          >
            {task}
          </span>
        </label>
      ))}
    </div>
  );
}
