import React from "react";
import "./Services.css";
import Home from "../home/Home";
import Yoga from "../../Assets/Images/yoga.svg";
import About from "../about/About";

const Services = () => {
    return (
        <>
            <div className="services-main">
                <h3>CHOOSE ART</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and type setting
                    industry.Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500.
                </p>
                <div className="services-plan-main">
                    <div className="services-plan_1">
                        <img src={Yoga} alt="yoga" />
                        <h4>NEWBIE CLASS </h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and type setting
                            industry.
                        </p>
                    </div>
                    <div className="services-plan_1">
                        <img src={Yoga} alt="yoga" />
                        <h4>ADVANCED CLASS </h4>{" "}
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and type setting
                            industry.
                        </p>
                    </div>
                    <div className="services-plan_1">
                        <img src={Yoga} alt="yoga" />
                        <h4>EXPERT CLASS </h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and type setting
                            industry.
                        </p>
                    </div>
                </div>
            </div>
            <About />
        </>
    );
};

export default Services;
