import React, { Component } from 'react';
import * as Action from '../Action';
import Counter from './Counter';
import PropTypes from 'prop-types';

export default class CounterContainer extends Component{
    constructor(props, context){
        super(props, context);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState(){
        return{
            value: this.context.store.getState()[this.props.caption]
        };
    }

    onIncrement(){
        this.context.store.dispatch(Action.increment(this.props.caption));
    }

    onDecrement(){
        this.context.store.dispatch(Action.decrement(this.props.caption));
    }

    onChange(){
        this.setState(this.getOwnState());
    }

    componentDidMount(){
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        this.context.store.unsubscribe(this.onChange);
    }

    render(){
        return (<Counter caption={this.props.caption} onIncrement={this.onIncrement} onDecrement={this.onDecrement} value={this.state.value}></Counter>);
    }
}

CounterContainer.contextTypes = {
    store: PropTypes.object
};