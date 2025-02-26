
import React from "react";
import oef_image from "../Images/oef_image.png";
import { Link } from "react-router-dom";


const Home = () => {
  return (

    <div 
    className=" min-vh-100"
    style={{
      backgroundImage: `url(${oef_image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw"
    }}
  >
    <div className="d-flex justify-content-end p-3">
    
    <Link to="/Login">  <button className="btn btn-warning">Login</button> </Link>
    </div>
  </div>
  );
};

export default Home;
