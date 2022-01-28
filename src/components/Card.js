import React from "react"
import RedStar from "../images/star.png"

import FirstImage from "../images/katie.png"

function Card() {
    return (
        <div className="cards">
            <h3 className="soldout--text">Soldout</h3> 
            <img src={FirstImage} alt="Katie" className="katie--photo"/>
            <div className="card--stats">
                <img src={RedStar} alt="Red Star" className="star--photo"/>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <p className="katie--text">Life lessons with Katie Zaferes</p>
            <p className="katie--text--price"><span className="bold">From $136</span> / person</p> 
        </div>
    )

}

export default Card;

