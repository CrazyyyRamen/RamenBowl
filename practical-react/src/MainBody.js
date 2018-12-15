import React, { Component } from 'react';
import{Switch, Route} from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import Feature from "./Feature";

export default class MainBody extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/feature" name="feature" component={Feature}></Route>
                <Route path="/settings" name="setting" component={Settings}></Route>
            </Switch>
        );
    }
}