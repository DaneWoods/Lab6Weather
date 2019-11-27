import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem.js';
import './App.css';

class WeatherList extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render () {
    const { forecastDays } = this.props;
    return (
        <div className="weather-list flex-parent">
            { forecastDays.map((forecastDay, index) =>
                <WeatherListItem
                    key={forecastDay.dt}
                    forecastDay={forecastDay}
                    index={index}
                />
            )}
        </div>
    );
  }
}

export default WeatherList;