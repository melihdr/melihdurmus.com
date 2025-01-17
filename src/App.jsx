import React, { useState } from "react";
import "./index.css";
import Sum24mer from "./pages/Sum24mer";
import Reading from "./pages/Reading";
import AboutMe from "./pages/AboutMe";
import Sum23mer from "./pages/Sum23mer";
import CoolEquations from "./pages/CoolEquations";

function App() {
  const [number, setNumber] = useState(0);
  const [content, setContent] = useState(null);

  return (
    <div className="page-grid">
      <div className="left-grid">
        <div className="photo-div">
          <img
            className="personal_photo"
            src="../images/myPhoto.png"
            alt="my_photo"
          />
          <p style={{ fontSize: "11px", paddingBottom: "1vw" }}>me, 2024</p>
        </div>
        <div>
          <p>tags</p>
          <hr />

          <button onClick={() => setNumber(number + 1)} className="button">
            {number}
          </button>
          <div>
            <div>
              <button
                onClick={() => {
                  setContent(<Sum24mer />);
                }}
                className="button"
              >
                2024 summer/amsterdam
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setContent(<CoolEquations />);
                }}
                className="button"
              >
                cool equations
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setContent(<Reading />);
          