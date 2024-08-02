import React from "react";
import '../stylesheet/navbar.css'




const Navbar = () => {
    return (
        <div className="nav">

            <a href="/"><div className="link">Home</div></a>


            <a href="/about"><div className="link">About</div></a>

            <a href="/contact"><div className="link">Contact</div></a>

            <a href="/features"><div className="link">Features</div></a></div>

    )
}


export default Navbar;