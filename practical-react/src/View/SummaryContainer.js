import React, { Component } from 'react';
import Summary from './Summary';
import PropTypes from 'prop-types';

export default class SummaryContainer extends Component{
    constructor(props, context){
        super(props, context);

        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState(){
        let sum = 0;
        const state = this.context.store.getState();

        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum += state[key];
            }
        }

        return {sum:sum};
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
        return (<Summary sum={this.state.sum}></Summary>);
    }
}

SummaryContainer.contextTypes = {
    store: PropTypes.object
};