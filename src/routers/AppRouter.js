import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import AdminPage from '../components/AdminPage';

const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={LoginPage} />
        </Switch>
    </Router>
);

export default AppRouter;