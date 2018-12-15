import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Action from '../Action';
import {connect} from 'react-redux';

// import CounterStore from '../store/CounterStore.js';

// export default class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.onChange = this.onChange.bind(this);
//         this.state = {
//             count: CounterStore.getCounterValues()[props.caption]
//         }
//     }

//     componentDidMount(){
//         CounterStore.addChangeListener(this.onChange);
//     }

//     componentWillUnmount(){
//         CounterStore.removeChangeListener(this.onChange);
//     }

//     onChange(){
//         const newValue = CounterStore.getCounterValues()[this.props.caption];
//         this.setState({count: newValue});
//     }

//     onClickIncrement(){
//         Action.increment(this.props.caption);
//     }

//     onClickDecrement(){
//         Action.decrement(this.props.caption);
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.onClickIncrement.bind(this)}>+</button>
//                 <button onClick={this.onClickDecrement.bind(this)}>-</button>
//                 <span>{this.props.caption} count: {this.state.count}</span>
//             </div>
//         )
//     }
// }

function Counter({caption, onIncrement, onDecrement, value}){
    return(
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    );
}

function mapStateToProps(state, ownProps){
    return{
        value: state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        onIncrement: () => {
            dispatch(Action.increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(Action.decrement(ownProps.caption));
        }
    }
}

Counter.PropTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);