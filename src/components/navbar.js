import React from "react";
import { useState } from "react";
import '../stylesheet/navbar.css'




const Navbar = () => {
   
    const [colorchange,setcolorcolochange] = useState(false);

    const changenavbarcolor =()=>{
       
            if(window.scrollY >= 80){
                setcolorcolochange(true);
            }
            else{
                setcolorcolochange(false);
            }
    }

    window.addEventListener("scroll",changenavbarcolor);

    return (
        <div className="nav"  id = {colorchange ? "navbarcolor" : "navcolor"}>

            <a  href="/"><div className="link">Home</div></a>


            <a href="/about"><div className="link">About</div></a>

            <a href="/contact"><div className="link">Contact</div></a>

            <a href="/features"><div className="link">Features</div></a></div>

    )
}


export default Navbar;