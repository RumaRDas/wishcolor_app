import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from'./pages/Login/Dashboard';
import Register from './pages/Registration'

const Routes = () =>{
    return (
<BrowserRouter>
<Switch>
<Route path='/' exact component={Login}/>
<Route path='/register' exact component={Register}/>
<Route path='/dashboard' component={Dashboard}/>
</Switch>
</BrowserRouter>
    )
}

export default Routes;
