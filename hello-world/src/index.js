import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,  browserHistory } from 'react-router';
import App from './app/containers/App';
import MovieDetail from './app/components/MovieDetail/MovieDetail';
import NotFound from './app/components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/details" component={MovieDetail} />
        <Route path="*" component={NotFound} />
    </Router>
), document.getElementById('root'));
