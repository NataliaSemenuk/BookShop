import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
ReactDOM.render(<App />, document.getElementById('root'));
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

