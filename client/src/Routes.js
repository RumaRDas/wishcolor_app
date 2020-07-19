import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Register from './pages/Registration';
import EventPages from './pages/EventPages';

const Routes = () =>{
    return (
<BrowserRouter>
<Switch>
<Route path='/'exact component={Dashboard}/>
<Route path='/login' exact component={Login}/>
<Route path='/register' exact component={Register}/>
<Route path='/gradient' component={EventPages}/>
</Switch>
</BrowserRouter>
    )
}

export default Routes;
