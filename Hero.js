import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
import './Hero.css';
export default function Hero(){
    return(
        <section className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-left">
                 <div className="hero-title">
                    <div className="orange-cicle"/>
                    <motion.h1
                     initial={{y:"2rem",opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:2,type:"spring"}}>
                    Discover <br/>Most Suitable<br/>Property</motion.h1>
                 </div>
                 <div className="hero-des">
                    <span className="des">Find a variety of properties that suit you very easilty</span>
                    <span className="des">Forget all difficullies in finding a ressidience for you</span><br/>
                 </div>
                 <div className="search-bar">
                 <i className=" loca bi bi-geo-alt-fill"></i>
                 <input type="text"/>
                 <button className="button">Search</button>
                
           
                    

                 </div>
                 <div className="stats">
                    <div className="stat">
                        <span>
                            <CountUp start={88000} end={90000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Premium Product</span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Happy Customers</span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start={0}  end={28} duration={8} />
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Award Winnings</span>
                    </div>



                 </div>
                </div>
                <div className="hero-right">
                    <motion.div
                    initial={{x:'7rem',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:2,type:'spring'}}
                    
                     className="img1">
                        <img src="header.avif" alt="header"/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}