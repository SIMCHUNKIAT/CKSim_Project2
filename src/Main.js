import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Product from "./Product"
import Data from "./Data"
import Analytics from "./Analytics"

function Main() {
    const flightsMemory = JSON.parse(localStorage.getItem('flights'))
    const partsMemory = JSON.parse(localStorage.getItem('partsList'))




    const [airport, setAirport] = useState("");
    const [airline, setAirline] = useState("");
    const [date, setDate] = useState("");
    const [flights, setFlights] = useState(flightsMemory);
    const [partsList, setPartsList] = useState(partsMemory);
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/product" element={<Product partsList={partsList} setPartsList={setPartsList} />} />
                <Route path="/data" element={<Data flights={flights} setFlights={setFlights} airport={airport} setAirport={setAirport} airline={airline} setAirline={setAirline} date={date} setDate={setDate} />} />
                <Route path="/analytics" element={<Analytics flights={flights} partsList={partsList} />} />
            </Routes>
        </div>

    )
}

export default Main