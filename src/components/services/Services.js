import React from 'react'
import "./Services.css"
import Home from '../home/Home'
import Yoga from "../../Assets/Images/yoga.svg"

const Services = () => {
    return (
        <>
            <Home />
            <div className='services-main'>
                <h3>CHOOSE ART</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and type setting
                    industry.Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500.
                </p>
                <div className='services-plan-main'>
                    <div className='services-plan_1'><img src={Yoga} alt='yoga' /></div>
                    <div className='services-plan_1'><img src={Yoga} alt='yoga' /></div>
                    <div className='services-plan_1'><img src={Yoga} alt='yoga' /></div>
                </div>
            </div>
        </>
    )
}

export default Services