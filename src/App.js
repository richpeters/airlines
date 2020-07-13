import axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AvailableFlightContext from './components/availableFlightsContext';
import Flight from './components/Flight';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import FlightSelect from './components/FlightSelect';

// Styles 
import './styles/styles.scss';


class App extends Component {
    state = {
        // flights: flightData.filter(f => f.flight.icao != null),
        error: null,
        flights: null,
        loaded: false
    }

    componentDidMount() {
        // Call server
        const api_url = 'https://g4xyr7m9h6.execute-api.us-east-1.amazonaws.com/dev/flights';

        axios(api_url).then(response => {
            //We only want flights that have a registered ICAO
            const flights = response.data.data.filter(f => f.flight.icao != null);
            
            this.setState({flights: flights, loaded: true});
        }).catch(error => {
            this.setState({error: error.message, loaded: true});
        })
    }

    renderError() {
        if (this.state.error) return <p>{this.state.error}</p> 
        return null;
    }


    render() {
        const { error, flights, loaded } = this.state;

        if (!loaded) {
            return <Loading />
        }

        return (
            <div className="content">
                <div className="brand">
                    <h1>The <em>delayed</em> FlightTracker</h1>
                    <p>Your source of currently delayed flights!</p>
                </div>
                {this.renderError()}
                {!error && flights &&
                    <AvailableFlightContext.Provider value={flights}>
                        <Switch>    
                            <Route path="/flight/:airport/:id" component={Flight} />    
                            <Route path="/not-found" component={NotFound} />    
                            <Route path="/" exact component={FlightSelect} />    
                            <Redirect to="/not-found" />
                        </Switch>
                    </AvailableFlightContext.Provider>
                }
            </div>
        );
    }
}

export default App;