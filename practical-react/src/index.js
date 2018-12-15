import React from "react";
import ReactDOM from "react-dom";
import store from "./store/Store.js";
import {Provider} from "react-redux";
import ControlPanel from "./View/ControlPanel.js";

ReactDOM.render (
    <Provider store={store}>
        <ControlPanel/>
    </Provider>
    
    , document.getElementById('root')
);
