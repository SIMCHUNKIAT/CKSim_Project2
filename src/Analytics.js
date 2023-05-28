import React from "react";
import FlightHoursCalculator from "./FHCalculator";

function Analytics({ flights, partsList }) {

  return (
    <div>
         <h1>Analytics Page</h1>
         <FlightHoursCalculator flights={flights} partsList={partsList} />
    </div>
   
  );
}

export default Analytics;