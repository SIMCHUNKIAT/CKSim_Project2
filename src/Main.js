import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Data from "./Data"
import Analytics from "./Analytics"

function Main() {

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/data" element={<Data />} />
                <Route path="/analytics" element={<Analytics />} />
            </Routes>
        </div>
        
    )
}

export default Main