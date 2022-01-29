import React from "react"


function Card(props) {
   
    

    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLDOUT"
    }else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    





    return (

        <div className="card">
            { badgeText && <div className="card--badge">{badgeText}</div> } 
            <img src={`../images/${props.coverImg}`} className="card--image"/>

            <div className="card--stats">
                <img src={process.env.PUBLIC_URL  + "/images/star.png"} alt="Red Star" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p> 
        </div>
    )

}

export default Card;

// line 9- wrapping in brackets allows us to do JS so if the openSpots ever equals 0 it will change to sold out. 
// if i did write this conditional all images would say soldout