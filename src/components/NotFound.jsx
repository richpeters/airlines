import React from 'react';
import BackButton from './BackButton';

const NotFound = () => {
    return ( 
        <React.Fragment>
            <BackButton />
            <h3>Flight not found</h3>
            <p>Please try again</p>   
        </React.Fragment>
    );
}
 
export default NotFound;