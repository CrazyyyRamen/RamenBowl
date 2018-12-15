import React, { Component } from 'react';
import Counter from './Counter';

export default class ControlPanel extends Component {
    constructor(props){
        super(props);
        this.initValue = [1,10,100]
        const initSum = this.initValue.reduce((a,b) => a+b, 0);
        this.state = {
            sum: initSum
        }
    }

    onUpdateCounter(changeVal){
        this.setState({
            sum: this.state.sum + changeVal
        });
    }

    render(){
        return(
            <div>
                <Counter captain="first" initValue={1} onUpDate={this.onUpdateCounter.bind(this)}></Counter>
                <Counter captain="second" initValue={10} onUpDate={this.onUpdateCounter.bind(this)}></Counter>
                <Counter captain="third" initValue={100} onUpDate={this.onUpdateCounter.bind(this)}></Counter>
                <hr></hr>
                Total: {this.state.sum}
            </div>
        );
    }
}