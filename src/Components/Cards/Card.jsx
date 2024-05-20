import React from "react";
import "./Card.css";

export const Card = ({ title, description }) => {
  return (
    <div className="card-container">
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
    </div>
  );
};
