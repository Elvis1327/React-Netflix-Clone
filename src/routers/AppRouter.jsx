import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}



