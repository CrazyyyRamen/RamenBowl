import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component{
    changeText(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render(){
        return(
            // <div>
            //     <h3>{this.props.title}</h3>
            //     <input value={this.props.title} onChange={this.changeText.bind(this)}/>
            //     <input type="button" value="click me" onClick={this.props.clickBtn}></input>
            // </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/feature">Feature</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        )
    }
}

export default Header;