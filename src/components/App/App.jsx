import React, {Component, Fragment} from 'react';
import './App.css';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import  withBookstoreService from '../hoc/withBookstoreService';

const App = () => {
    return (
        <div>
            <ErrorIndicator />
            <Spinner />
        </div>
    );
}

export default App;