import React, { useEffect } from "react";
// import { DatePicker } from 'rsuite';

function Data({ airport, setAirport, airline, setAirline, date, setDate, flights, setFlights }) {

    const url = `https://aviation-edge.com/v2/public/flightsHistory?key=80d26f-16e109&code=${airport}&type=arrival&date_from=${date}&airline_iata=${airline}`;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setFlights(data);
            // console.log(data);
            // console.log(data[0].airline);
            localStorage.setItem('flights', JSON.stringify(flights))
        };

        fetchData();

    }, [airport, airline, date]);
    console.log(flights);
    return (
        <div className="background">
            <div className="components">
                <h1>Data Page</h1>
                <form>
                    <label>
                        Arrival Airport  :
                        <input
                            type="text"
                            value={airport}
                            onChange={(e) => setAirport(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Airline  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        <input
                            type="text"
                            value={airline}
                            onChange={(e) => setAirline(e.target.value)}
                        />
                    </label>
                    <br />
                    {/* <DatePicker
                    style={{ width: 300 }}
                    placeholder="Select Date"
                    onChange={(d) => setDate(d)}
                /> */}
                    <label>
                        Date  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        <input
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </label>
                </form>
                <br></br>
                <div className="table-container">
                    <table className="table">
                        <thead className="thead">
                            <tr className="trHead">
                                <th className="th">Airline</th>
                                <th className="th">Flight Number</th>
                                <th className="th">Departure Airport</th>
                                <th className="th">Departure Time</th>
                                <th className="th"> Arrival Time</th>
                            </tr>
                        </thead>
                        <tbody className="tBody">
                            {Array.isArray(flights) && flights.map((flight, index) => (
                                <tr key={index} className="trBody">
                                    <td className="td">{flight.airline.name}</td>
                                    <td className="td">{flight.flight.number}</td>
                                    <td className="td">{flight.departure.iataCode}</td>
                                    <td className="td">{flight.departure.actualTime}</td>
                                    <td className="td">{flight.arrival.actualTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default Data;