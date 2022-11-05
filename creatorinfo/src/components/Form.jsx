import React from "react";
import "./Form.css";

const Form = ({ showForm }) => {
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={() => showForm(false)}>
        <h2 className="header-form">
          Enter the Asked Information to Explore the Creator World !!{" "}
        </h2>
        <div className="form-control">
          <div className="first">
            <label htmlFor="Name">Name</label>
            <input type="text" />
            <label htmlFor="Social Media Name">Social Media Name</label>
            <input type="text" />
            <label htmlFor="Social Media Handle">Social Media Handle</label>
            <input type="text" />
            <label htmlFor="Sex">Sex</label>
            <input type="text" />
          </div>
          <div className="second">
            <label htmlFor="Followers Count">Followers Count</label>
            <input type="number" />
            <label htmlFor="Post Engagement Rate">Post Engagement Rate</label>
            <input type="number" />
            <label htmlFor="Likes">Likes</label>
            <input type="number" />
            <label htmlFor="Category">Category</label>
            <input type="text" />
          </div>
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
