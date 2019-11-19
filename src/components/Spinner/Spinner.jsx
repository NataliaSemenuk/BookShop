import React from 'react';
import '../../css/Spinner/Spinner.css';

const Spinner = () => {
    return (
        <div className ="lds-css ng-scope"><div className ="lds-ellipsis"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>
    );
}
export default Spinner;