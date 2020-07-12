import React from 'react';
import { Link } from 'react-router-dom';


const BackButton = () => {
    return (  
        <div className="button-row">
            <Link to='/' className="button">Back to list</Link>
        </div>
    );
}
 
export default BackButton;