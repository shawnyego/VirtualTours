import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer ";
import Search from "../Components/Search"
import Cards from "../Components/Cards";

const PrimarySchool=()=>{
    return(
        <div className="home">
            <Search/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default PrimarySchool;