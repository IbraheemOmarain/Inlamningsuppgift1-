import React from "react"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {AboutUS} from '../view/AboutUS'
import {HomeView} from '../view/HomeView'


export const Routing = ()=>{

    return(

<Router>
    <Switch>
        <Route exact path="/aboutus" component={AboutUS} /> 
        <Route component ={HomeView} />
    </Switch>
</Router>

    )
}