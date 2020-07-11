import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Edit from './pages/Edit';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/home" exact component={Home} />
                <Route path="/home/new" component={NewProduct} />
                <Route path="/home/edit" component={Edit} />
            </Switch>
        </BrowserRouter>
    );
}