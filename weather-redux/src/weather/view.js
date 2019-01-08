import React from 'react';
import PropTypes from 'prop-types';
import * as Status from './status.js';
import {connect} from 'react-redux';

const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
    switch (status){
        case Status.LOADING: {
            return <div>Fetching weather data, please wait...</div>
        }
        case Status.SUCCESS: {
            return (
                <div>
                    {cityName}, {weather}, Lt: {lowestTemp}, Ht: {highestTemp}
                </div>
            )
        }
        case Status.FAILURE: {
            return <div>Fail to grab weather data</div>
        }
        default:{
            throw new Error("Unexpected error " + status);
        }
    }
}

Weather.propTypes = {
    status: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    weather: PropTypes.string,
    lowestTemp: PropTypes.string,
    highestTemp: PropTypes.string
};

const mapStateToProps = (state) => {
    const weatherData = state.weather;

    return{
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    };
}

export default connect(mapStateToProps)(Weather);