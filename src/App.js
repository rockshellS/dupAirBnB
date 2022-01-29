import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"



const data = Data.map( card => {
   return  <Card   
                key={card.id} 
                id={card.id} 
                {...card}
                
            />
    })



export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {data}
            </section>
        </div>
    )
}