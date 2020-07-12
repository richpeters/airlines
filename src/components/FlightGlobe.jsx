import React, { useContext } from 'react';
import FlightContext from './flightContext';
import BackButton from './BackButton';
import ReactGlobe from 'react-globe';


const FlightGlobe = () => {
    const flightContext = useContext(FlightContext);
    const { airline, flight, live } = flightContext;

    // Create marker with data
    const markers = [
        {
            'color': 'red',
            'coordinates': [
                live.latitude,
                live.longitude
            ],
            'value': 100
        }
    ]

    const markerOptions = {
        activeScale: 1,
        enableTooltip: false,
        exitAnimationDuration: 0
    }

    return ( 
        <div className="flight-globe">
            <div className="flight-globe__top-bar">
                <BackButton />
                <div className="flight-globe__details">
                    <h3>{airline.name} {flight.icao}</h3>
                    <p className="meta">Current position: {live.latitude},{live.longitude}</p>   
                    <p className="meta">Current speed: {live.speed_horizontal} KM/h</p>   
                </div>
            </div>
            <ReactGlobe 
                className='flight-globe'
                markers={markers} 
                markerOptions={markerOptions} 
                focus={[live.latitude, live.longitude]}
                focusOptions={{
                    animationDuration: 5000,
                    distanceRadiusScale: 2,
                    easingFunction: ['Quadratic', 'InOut'],
                    enableDefocus: false,
                }}
                globeOptions={{
                    enableGlow: false,
                    cloudsOpacity: 1
                }}
            />
        </div>                    
    )
}
 
export default FlightGlobe;