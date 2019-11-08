import React, {Component, Fragment} from 'react';
import './App.css';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary' 

export default class App extends Component {
    render() {
        return (
            <div>
                <ErrorIndicator />
                <Spinner />
            </div>
        );
    }
}