import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
})

export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILURE,
    error
})

let nextSeqId = 0;

export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        
        // ensure the result and the selection of dropdown are consistent
        const seqId = ++nextSeqId;

        const dispatchIfValid = (action) => {
            if(seqId === nextSeqId){
                dispatch(action);
            }
        }

        dispatchIfValid(fetchWeatherStarted())
        
        return fetch(apiUrl).then(
            (response) => {
                if(response.status !== 200){
                    throw new Error("Failt to fetch data from api " + response.status);
                }
                
                response.json().then(
                    (responseJson) => {
                        dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
                    }
                ).catch((error) => {
                    dispatchIfValid(fetchWeatherFailure(error));
                });
            }
        ).catch((error) => {
            dispatchIfValid(fetchWeatherFailure(error));
        })
    };
}