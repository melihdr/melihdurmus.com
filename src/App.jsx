import React, { useState } from "react";
import "./index.css";
import Sum24mer from "./Sum24mer";
import Reading from "./pages/Reading";
import AboutMe from "./pages/AboutMe";
import Sum23mer from "./pages/Sum23mer";

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
                  setContent(<AboutMe />);
                }}
                className="button"
              >
                about me
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setContent(<Reading />);
                }}
                className="button"
              >
                reading
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setContent(<Sum23mer />);
                }}
                className="button"
              >
                2023 summer/ege
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ paddingBottom: "2vw" }}>
          <div style={{ fontSize: "18px" }}>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              dreamscape
            </span>
            {""} by melih durmus
          </div>
          <hr />
          <div className="top-buttons-div">
            <button className="top-button">home</button>
            <button className="top-button">about</button>
            <button className="top-button">projects</button>
            <button className="top-button">notes</button>
            <button className="top-button">work</button>
            <button className="top-button">reading</button>
          </div>
        </div>
        <div className="right-grid">{content && <div>{content}</div>}</div>
      </div>
    </div>
  );
}

export default App;
