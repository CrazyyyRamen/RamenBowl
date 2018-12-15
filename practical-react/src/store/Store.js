import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'First': 1,
    'Second': 10,
    'Third': 100
};

const store = createStore(reducer,initValues);

export default store;