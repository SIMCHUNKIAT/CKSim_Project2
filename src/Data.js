import React, { useState, useEffect } from "react";

function Data() {
  const [airport, setAirport] = useState("");
  const [airline, setAirline] = useState("");
  const [date, setDate] = useState("");
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://aviation-edge.com/v2/public/flightsHistory?key=80d26f-16e109&code=${airport}&type=arrival&date_from=${date}&airline_iata=${airline}`;
      const res = await fetch(url);
      const data = await res.json();
      setFlight(data);
    };

    fetchData();
  }, [airport, airline, date]);

console.log("Flightlist:", flight);

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
            <th>Flight Number</th>
            <th>Departure Airport</th>
            <th>Arrival Airport</th>
          </tr>
        </thead>
        <tbody>
          {flight.map((flight) => (
            <tr key={flight.number}>
              <td>{flight.number}</td>
              <td>{flight.departureAirport}</td>
              <td>{flight.arrivalAirport}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;