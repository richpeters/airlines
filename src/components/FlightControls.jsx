import React from 'react';
import { NavLink } from 'react-router-dom';

const FlightControls = (props) => {
    const { airport, id } = props.flight;
 
    // Only need to show this if there is live data, else the globe isn't available
    if (props.flightData.live) {
        return ( 
            <nav className="flight-detail__controls">
                <ul>
                    <li>
                        <NavLink to={`/flight/${airport}/${id}`} exact>View details</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/flight/${airport}/${id}/globe`} exact>View flight on globe</NavLink>
                    </li>
                </ul>
            </nav>
         );
    }

    return null
}
 
export default FlightControls;