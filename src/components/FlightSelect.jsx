import React, { useContext } from 'react';
import AvailableFlightsContext from  './availableFlightsContext';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

const FlightSelect = () => {
    const flightsContext = useContext(AvailableFlightsContext);

    return ( 
        <nav className='flight-link-panel'>
            <div className="flight-link-panel__headers" aria-hidden="true">
                <h5>Flight</h5>
                <div>
                    <h5>Depart</h5>
                    <h5>Arrival</h5>
                </div>
                <h5>Destination</h5>
            </div>

            <div className="flight-link-panel__options">
                {flightsContext.map(flight => (
                    <NavLink 
                        to={`/flight/${flight.departure.icao}/${flight.flight.icao}`}
                        key={`${flight.departure.icao}-${flight.flight.icao}`} 
                        className="flight-link"
                    >
                        <div className="flight-link__identifier">
                            <strong>{flight.flight.icao} {flight.live && <span className="live">live</span>}</strong>
                            <span>{flight.airline.name}</span>
                        </div>
                        <div className="flight-link__times">
                            <div className="flight-link__times__departure">
                                <Moment date={flight.departure.estimated} format='HH:MM' />
                                {flight.departure.delay && <span> / <strong className="delay">{flight.departure.delay}&nbsp;min(s)</strong></span> }
                            </div>
                            <div className="flight-link__times__arrival">
                                <Moment date={flight.arrival.estimated} format='HH:MM' />
                                {flight.arrival.delay && <span> / <strong className="delay">{flight.arrival.delay}&nbsp;min(s)</strong></span> }
                            </div>
                        </div>
                        <div className="flight-link__destination">
                            <strong>{flight.arrival.iata}</strong>
                            <span>{flight.arrival.airport}</span>
                        </div>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
 
export default FlightSelect;