import React from "react";
import "./Result.css";
import Card from "./Card";

const Results = ({ card }) => {
  return (
    <div className="results">
      <Card card={card} />
    </div>
  );
};

export default Results;
