import React from "react";
import { data } from "../data/amsterdam";
import "./css/amsterdam.css";

function TextComponent() {
  return (
    <div>
      {data.map((individual) => {
        const { photo, description } = individual;
        return (
          <div key={description}>
            <img className="amsterdam-photos" src={photo}></img>
            <div>{description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TextComponent;
