import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';
import Create from './pages/Create';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/Home"  component={Home} />
                <Route path="/create" component={Create} />
            </Switch>
        </BrowserRouter>
    );
}