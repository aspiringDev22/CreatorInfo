import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Form from "./Form";
import Navbar from "./Navbar";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      {/* <Dashboard /> */}
      {showForm === true ? <Form /> : <Dashboard />}
    </>
  );
};

export default Home;
