import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color, tool1, tool2, tool3}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">TOOLS</button>
      <div className="tool">
      <span>{tool1}</span>
      <span>{tool2}<br /> {tool3}</span>
      </div>
    </div>
  );
};

export default Card;