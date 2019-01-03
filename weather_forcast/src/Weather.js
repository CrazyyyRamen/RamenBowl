import React from 'react';

const cityCode = 101020100;

class Weather extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {weather: null};
    }

    componentDidMount(){
        const apiUrl = `/data/cityinfo/${cityCode}.html`;

        fetch(apiUrl).then((response) => {
            if(response.status !== 200){
                console.log(response.status);
                throw new Error('Fail to get weather info ' + response.status);
            }

            response.json().then((responseJson) => {
                this.setState({weather: responseJson.weatherinfo});
            }).catch((error) => {
                this.setState({weather:null});
            });
        }).catch((error) => {
            this.setState({weather:null});
        });
    }

    render(){
        if(!this.state.weather){
            return <div>Loading...</div>;
        }

        const {city, weather, temp1, temp2} = this.state.weather;

        return(
            <div>
                {city}, {weather}, Highest Temp: {temp1}, Lowest Temp: {temp2}
            </div>
        )
    }
}

export default Weather;