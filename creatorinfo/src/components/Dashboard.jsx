import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Dashboard.css";
import img from "../components/right-container.png";
import Results from "./Results";
import data from "../data";

const Dashboard = () => {
  const [showResult, setShowResult] = useState(false);
  const [card, setCard] = useState(data);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setShowResult(false);
      return;
    }
    const newCard = data.filter(
      (item) => item.name.toLowerCase() === e.target.value
    );
    setShowResult(true);
    setCard(newCard);
  };

  return (
    <div className="dashboard">
      <div className="left-container">
        <form className="dashboard">
          <input
            type="text"
            placeholder="search.."
            onKeyUp={(e) => handleChange(e)}
          />
          <button className="search" onClick={(e) => e.preventDefault()}>
            <BiSearchAlt />
          </button>
        </form>
      </div>
      {!showResult ? (
        <div className="right-container">
          <h2 className="description">
            Discover top creators & influencers for your next influencer
            marketing campaign. Get to know about their Engagements, the
            category they are best at and make your product be campaigned by the
            best you want.
          </h2>
          <img src={img} alt="illustrations" className="img-right" />
        </div>
      ) : (
        <Results card={card} />
      )}
    </div>
  );
};

export default Dashboard;
