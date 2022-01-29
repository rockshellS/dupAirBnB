import React from "react"


function Navbar() {
    return (
       <nav>
           <img 
                src={process.env.PUBLIC_URL + "/images/airbnb.png"} 
                alt="Air B&B logo" className="nav-logo"/>
       </nav>
    )
}

export default Navbar;

