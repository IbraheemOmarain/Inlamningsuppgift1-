import React from "react"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {AboutUS} from '../view/AboutUS'
import {HomeView} from '../view/HomeView'
import {SigninView} from '../view/SigninView'


export const Routing = (props)=>{

    return(

<Router>
    {props.children}
    <Switch>
        <Route exact path="/aboutus" component={AboutUS} /> 
        <Route exact path ="/signin" component={SigninView}/>
        <Route component ={HomeView} />
    </Switch>
</Router>

    )
}