import React, { useContext } from 'react';
import FlightContext from './flightContext';
import BackButton from './BackButton';
import Moment from 'react-moment';


const FlightDetails = () => {
    const { departure, arrival, airline, flight, live } = useContext(FlightContext);
    const holder_class = !live ? 'border-top' : '';

    return ( 
        <div className={`flight-details__holder ${holder_class}`}>
            <BackButton />
            <div className="flight-details">
                <div className="flight-details__overview">
                    <h3>{airline.name} {flight.icao}</h3>
                    <p className="meta">{departure.airport} ({departure.iata}) - {arrival.airport} ({arrival.iata})</p>
                </div>
                
                <div className="flight-details__arrival">
                    <span className="uppercase">Estimated arrival</span>
                    <p className="big"><Moment date={arrival.estimated} format='HH:MM' /></p>
                    <p className="delay">Delay: {arrival.delay} minute(s)</p>   
                </div>

                {live &&
                    <div className="flight-details__meta">
                        <h4>Live data <span className="live"></span></h4>
                        <p>Current altitude: <strong>{live.altitude} metres</strong></p>
                        <p>Current direction: <strong>{live.direction} degrees</strong></p>
                        <p>Current speed: <strong>{live.speed_horizontal} KM/h</strong></p>
                    </div>
                }
            </div>
        </div>
    )
}
    
export default FlightDetails;