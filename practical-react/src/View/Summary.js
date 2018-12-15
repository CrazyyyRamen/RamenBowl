import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import store from '../store/Store.js';
//import SummaryStore from '../store/SummaryStore.js';

// export default class Summary extends Component{
//     constructor(props){
//         super(props);
//         this.onSumChange = this.onSumChange.bind(this);
//         this.state = {
//             sum: SummaryStore.getSummary()
//         }
//     }

//     componentDidMount(){
//         SummaryStore.addChangeListener(this.onSumChange);
//     }

//     componentWillUnmount(){
//         SummaryStore.removeChangeListener(this.onSumChange);
//     }

//     onSumChange(){
//         const newSum = SummaryStore.getSummary();
//         this.setState({sum: newSum});
//     }

//     render(){
//         return(
//             <div>
//                 <span>Total: {this.state.sum}</span>
//             </div>
//         );
//     }
// }

function Summary({value}){
    return(
        <div>Total Count: {value}</div>
    );
}

function mapState(state){
    let sum = 0;
    for(const key in state){
        if(state.hasOwnProperty(key))
        {
            sum += state[key];
        }
    }

    return {value: sum};
}

Summary.PropTypes = {
    value: PropTypes.number.isRequired
};

export default connect(mapState)(Summary)