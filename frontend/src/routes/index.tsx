import React from 'react';
import Dashboard from '../pages/DashBoards';
import SignIn from '../pages/SignIn';
import {Route , Switch} from 'react-router-dom';

// http://localhost:3000/repositories/facebook/react <- uso do repository+
const Routes: React.FC = () => (
    <Switch>
        <Route path= "/" exact component= {Dashboard} />
        <Route path= "/users" component= {SignIn} />
    </Switch>
)
export default Routes