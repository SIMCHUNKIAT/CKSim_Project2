import React from 'react';
import PieChart from './Piechart';

const FlightHoursCalculator = ({ flights, partsList }) => {
    const calculateTotalFlightHours = (flights) => {
        if (!flights || flights.length === 0) {
            return 0;
        }

        let totalFlightHours = 0;

        flights.forEach((flight) => {
            const departureTimeStr = flight.departure && flight.departure.actualTime;
            const arrivalTimeStr = flight.arrival && flight.arrival.actualTime;

            if (!departureTimeStr || !arrivalTimeStr) {
                return; // Skip the current flight if departure or arrival time is missing
            }

            const departureTime = new Date(departureTimeStr);
            const arrivalTime = new Date(arrivalTimeStr);

            if (isNaN(departureTime) || isNaN(arrivalTime)) {
                return; // Skip the current flight if departure or arrival time is invalid
            }

            const flightDuration = arrivalTime - departureTime;
            const flightHours = flightDuration / (1000 * 60 * 60); // Convert milliseconds to hours

            totalFlightHours += flightHours;
        });

        return totalFlightHours;
    };

    const totalHours = calculateTotalFlightHours(flights);

    return <div>
        Total flight hours: {totalHours}
        <PieChart totalHours={totalHours} partsList={partsList} />
    </div>;
};

export default FlightHoursCalculator;