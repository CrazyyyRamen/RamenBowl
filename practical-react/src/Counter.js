import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: this.props.initValue
        }
    }

    incrementByOne(){
        this.updateCounter(true);
    }

    decrementByOne(){
        this.updateCounter(false);
    }

    updateCounter(isIncrement){
        const previousVal = this.state.count;
        const currentVal = isIncrement ? previousVal + 1 : previousVal - 1;
        const changeVal = currentVal - previousVal;

        this.setState({count: currentVal});
        this.props.onUpDate(changeVal);
    }
    
    render(){
        const {text} = this.props;
        return (
            <div>
                <button onClick={this.incrementByOne.bind(this)}>+</button>
                <button onClick={this.decrementByOne.bind(this)}>-</button>
                <span>{text} count: {this.state.count}</span>
            </div>
        );
    }
}
