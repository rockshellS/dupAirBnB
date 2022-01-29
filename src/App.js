import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"

const data = Data.map( card => {
   console.log(card.coverImg)
  return  <Card   key={card.id} id={card.id} title={card.title} description={card.description} 
price={card.price} coverImg={card.coverImg} stats={card.stats} 
location={card.location} />
})

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <Card/> */}
            {data}
            
        </div>
    )
}