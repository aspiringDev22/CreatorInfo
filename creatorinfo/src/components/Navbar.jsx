import React from "react";
import { AiOutlineSend, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import "./Navbar.css";

const Navbar = ({ setShowForm, showForm }) => {
  return (
    <nav>
      <h2 className="logo">
        <a href="https://superbio.me/"> SUPERBIO</a>
      </h2>
      <div className="icons">
        <div className="emoji likes">
          <AiFillHeart color="red" />
        </div>
        <div className="emoji comment">
          <AiOutlineComment color="blue" />
        </div>
        <div className="emoji share">
          <AiOutlineSend />
        </div>
      </div>
      <button className="register" onClick={() => setShowForm(!showForm)}>
        Are You a Creator ?
      </button>
    </nav>
  );
};

export default Navbar;
