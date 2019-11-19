import React from 'react';
import '../../css/ErrorIndicator/ErrorIndicator.css';
import image from '../../image/ee_Squirreled.svg';

const ErrorIndicator = () => {
    return (
        <div className ='errorIndicator'>
            <img className = 'errorIndicator__image' src = {image} alt = 'error' title = 'error'/>
            <span>Ooops, something went wrong...</span>
        </div>
    );
}
export default ErrorIndicator;