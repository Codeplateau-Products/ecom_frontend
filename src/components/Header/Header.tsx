import React from "react";
import '../../assets/css/Header.css';
import Head from './Head';
import Search from './Search'
import Navbar from "./Navbar";

const Header = () =>{
    return(
        <div>
            <Head />
            <hr style={{ color: "white" }} />
            <Navbar />
            <Search />
        </div>
    )
}

export default Header;