import React
 from "react";
 import './Footer.css';
 export default function Footer(){
    return(
        <section className="f-wrapper">
            <div className="f-container">
                
                <div className="f-left">
                   
                    <img src="./logo1949.jpg" alt="" width={120}/>
                        <span className="secondaryText">Our vision is to make all people <br/>the best place to live for them.</span>
                </div>
                <div className="f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">145 New york, FL 4571 ?USA</span>
                    <div className="f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>

                    </div>

                </div>


            </div>
        </section>
    )
 }