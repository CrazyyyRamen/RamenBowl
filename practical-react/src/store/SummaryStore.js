import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes.js';
import CounterStore from './CounterStore';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

function computeSummary(counterValue){
    let summary = 0;
        for(const key in counterValue){
            if(counterValue.hasOwnProperty(key)){
                summary += counterValue[key];
            }
        }

        return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },

    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT,callback);
    },

    getSummary:function(){
        return computeSummary(CounterStore.getCounterValues());
    }
});

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
    if((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT))
    {
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
})

export default SummaryStore