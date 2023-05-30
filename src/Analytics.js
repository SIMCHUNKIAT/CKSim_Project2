import React from "react";
import FlightHoursCalculator from "./FHCalculator";

function Analytics({ flights, partsList }) {

    return (
        <div className="background">
            <div className="components">
                <h1>Analytics Page</h1>
                <FlightHoursCalculator flights={flights} partsList={partsList} />
            </div>
        </div>
    );
}

export default Analytics;