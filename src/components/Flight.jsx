import axios from 'axios';

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FlightContext from './flightContext';
import FlightDetails from './FlightDetails'
import FlightControls from './FlightControls';
import FlightGlobe from './FlightGlobe'
import Loading from './Loading';


class Flight extends Component {
    state = { 
        redirect: false,
        loaded: false,
        flightData: null
    }

    componentWillMount() {
        // Call server with departing airport and ICAO
        const { airport, id } = this.props.match.params;
        const api_url = 'https://g4xyr7m9h6.execute-api.us-east-1.amazonaws.com/dev/flights'

        axios(`${api_url}/${airport}/${id}`).then(response => {
            // Always returns a list so if it's there take the first result
            if (response.data) {
                this.setState({
                    flightData: response.data.data[0],
                    loaded: true
                });
            }
        }).catch(error => {
            // We want to push traffic to the not-found route if this fails
            this.setState({ 
                redirect: true,
                loaded: true
            })
        });
    }

    render() { 
        const { redirect, loaded, flightData } = this.state;

        if (redirect) {
            return <Redirect to="/not-found" />;
        }

        if (!loaded) {
            return <Loading />
        }

        return ( 
            <div className="flight-detail__panel">
                <FlightContext.Provider value={flightData}>
                    {loaded && flightData &&
                        <React.Fragment>
                            <FlightControls flight={this.props.match.params} flightData={flightData} />
                            <Switch>
                                <Route path="/flight/:airport/:id/globe" render={() => <FlightGlobe />} /> 
                                <Route path="/flight/:airport/:id/" render={() => <FlightDetails />} />
                            </Switch>
                        </React.Fragment>
                    }
                </FlightContext.Provider>
            </div>
        );
    }
}
 
export default Flight;