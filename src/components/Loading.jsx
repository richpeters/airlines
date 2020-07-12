import React from 'react';
import LoadingSVG from '../loading.svg';

const Loading = () => {
    return (  
        <img className='loading' src={LoadingSVG} alt="loading" />
    );
}
 
export default Loading;