import React from "react";
import './Hero.css';
import Search from "./Search";

const Hero=()=>{
    return(
    <div className="hero">
        <div class="background-image"></div>
            <div class="Content">
            <div class="Intro">
        
        <h1>CONNECTING YOU TO TOP SCHOOLS WORLDWIDE</h1>
        <h4>Find the best primary, high-school, University or even TVET 
            that matches what you want.
        </h4>
        <Search/>
       </div>
       </div>
            
        </div>
    )
}
export default Hero;