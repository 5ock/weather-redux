import React from 'react'

import Loading from './Loading';

const WeatherCard = ({locationName, data, isLoading}) => {
    if(isLoading === true) return <Loading />
    if(!data.weather) return <div>請點選地區</div>
    return (
        <div>
            <p>{locationName}</p>
            <p>天氣: {data.weather}</p>
            <p>最高溫: {data.maxT} &deg;C</p>
            <p>最低溫: {data.minT} &deg;C</p>
            <p>降雨機率: {data.pop}%</p>
        </div>
    )
}

export default WeatherCard;