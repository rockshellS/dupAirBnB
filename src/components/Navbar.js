import React from "react"
import airbnblogo from "../images/airbnb.png"

function Navbar() {
    return (
       <nav>
           <img 
                src={airbnblogo}
                alt="Air B&B logo" className="nav-logo"/>
       </nav>
    )
}

export default Navbar;

