import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import BookstoreService from './services/BookstoreService';
import { BookstoreServiceProvider } from './components/BookstoreServiceContext/BookstoreServiceContext';
import store from './store';

const bookstoreService = new BookstoreService();
ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value = {bookstoreService}>
                <Router>
                    <App />
                </Router>    
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));
// import { createStore, bindActionCreators } from 'redux';
// import reducer from './reducers/reducer';
// import {inc} from './actions/actions';

// const store = createStore(reducer);
// const { dispatch } = store;
// store.subscribe(() => {
//     console.log(store.getState());
// });

// bindActionCreators(inc, dispatch);
// dispatch(inc());
// dispatch(inc());
// dispatch(inc());

