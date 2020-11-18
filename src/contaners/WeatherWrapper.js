import { connect } from 'react-redux'

// component
import WeatherCard from '../components/WeatherCard'

const calData = (location, data) => {
    if(!data[location]) return {};
    return data[location].items;
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        locationName: state.selectLocation,
        data: calData(state.selectLocation, state.getWeather),
        isLoading: state.getWeather[state.selectLocation] ? state.getWeather[state.selectLocation].isLoading : ''
    }
}


const WeatherWrapper = connect(mapStateToProps)(WeatherCard);

export default WeatherWrapper;