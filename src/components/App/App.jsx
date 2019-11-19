import React from 'react';
import {Switch, Route} from 'react-router-dom';
import '../../css/App/App.css';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

const App = () => {
    return (
        <div>
        <Switch>
            <Route path = '/' component = {HomePage} exact />
            <Route path = '/cart' component = {CartPage}/>
        </Switch>
        </div>
    );
}

export default App;