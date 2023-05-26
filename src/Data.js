import React, { useState, useEffect } from "react";

function Data() {
    const [airport, setAirport] = useState("");
    const [airline, setAirline] = useState("");
    const [date, setDate] = useState("");
    const [flights, setFlights] = useState([]);

    const url = `https://aviation-edge.com/v2/public/flightsHistory?key=80d26f-16e109&code=${airport}&type=arrival&date_from=${date}&airline_iata=${airline}`;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setFlights(data);
            // console.log(data);
            // console.log(data[0].airline);
        };

        fetchData();
    
    }, [airport, airline, date]);
console.log(flights);
    return (
        <div>
            <h1>Data Page</h1>
            <form>
                <label>
                    Airport:
                    <input
                        type="text"
                        value={airport}
                        onChange={(e) => setAirport(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Airline:
                    <input
                        type="text"
                        value={airline}
                        onChange={(e) => setAirline(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
            </form> 
            <table>
                <thead>
                    <tr>
                        <th>Airline</th>
                        <th>Flight Number</th>
                        <th>Departure Airport</th>
                        <th>Departure Time</th>
                        <th>Arrival Airport</th>
                        <th>Arrival Time</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(flights) && flights.map((flight, index) => (
                        <tr key={index}>
                            <td>{flight.airline.name}</td>
                            <td>{flight.flight.number}</td>
                            <td>{flight.departure.iataCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ); 
}

export default Data;