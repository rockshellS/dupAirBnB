import React from "react"



function Card(props) {
    console.log(props)
    return (
        <div className="cards">
            <h3 className="soldout--text">Soldout</h3> 
            <img src={`../images/${props.coverImg}`} alt="photo" className="card--photo"/>
            
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL  + "/images/star.png"} alt="Red Star" className="star--photo"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="title--text">{props.title}</p>
            <p className="text--price"><span className="bold">From ${props.price}</span> / person</p> 
        </div>
    )

}

export default Card;

