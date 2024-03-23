import React from "react";
import "./Home.css";
import Bike from "../../Assets/Images/bike.png";
import { Link } from "react-router-dom";
import Art from "../../Assets/Images/Art.svg"

const Home = () => {
  return (
    <div className="home-main">
      <div className="home_1">
        <h1 className="home_1_heading">
          ART CLASS<span className="home_1_span"></span>
        </h1>
        <p className="home_1_loream">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.Lorem Ipsum has been the industry standard dummy text ever
          since the 1500.
        </p>
        <Link to="/bikerent">
          <button type="button" class=" home_1_button">
            Join Now
          </button>
        </Link>
      </div>
      <div className="home_2">
        <img className="home_2_img" src={Art} alt="Art_img" />
      </div>
    </div>
  );
};

export default Home;
