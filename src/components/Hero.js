import React from "react"




function Hero() {
    return(
        <section className="hero-container">
            <img src={process.env.PUBLIC_URL  + "/images/groupphoto.png"}
             alt="Muti pictures" className="group-pics"/> 
            <h1 className="title">Online Experiences</h1>
            <p className="hero--text"> Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;