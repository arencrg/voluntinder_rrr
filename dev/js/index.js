import 'babel-polyfill';

import React from 'react';
import ReactDOM from "react-dom";

import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import allReducers from './reducers';
import App from './components/App';
import AllOpps from './containers/AllOpps';
import OneOpp from './containers/OneOpp';
import New from './containers/New';


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);


const Routes = props => {
  return (
    <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
        <Route path="/opportunities" component={AllOpps}/>
        <Route path="/opportunity/:id" compoemt={OneOpp}/>
        <Route path="/newvolunteer" component={New}/>
        <Route path="*">
          <IndexRedirect to="/" />
        </Route>
    </Router>
    </Provider>
  )
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
