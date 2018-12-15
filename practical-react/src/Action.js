import * as ActionTypes from './ActionTypes';

// export const increment = (counterCaptain) => {
//     AppDispatcher.dispatch({
//         type: ActionTypes.INCREMENT,
//         counterCaptain: counterCaptain
//     });
// }

// export const decrement = (counterCaptain) => {
//     AppDispatcher.dispatch({
//         type: ActionTypes.DECREMENT,
//         counterCaptain: counterCaptain
//     });
//}

export const decrement = (counterCaption) => {
    return{
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    };
};

export const increment = (counterCaption) => {
    return{
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    };
};

