import Axios from 'axios'
import  { REQUEST, RECEIVE, SELECT_LOCATION} from './actionsTypes'

export const selectLocation = (location) =>{
  return {
    type: SELECT_LOCATION,
    location
  }
}

export const requestDate = (location) => {
  return {
    type: REQUEST,
    location
  }
}

const handleGetData = (data) => {
  return {
    weather: data[0].time[0].parameter.parameterName,
    pop: data[1].time[0].parameter.parameterName,
    minT: data[2].time[0].parameter.parameterName,
    maxT: data[4].time[0].parameter.parameterName,
  }
}

export const receiveGet = (location, data) => {
  return {
    type: RECEIVE,
    location,
    getData: handleGetData(data.weatherElement)
  }
}

const api = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001';

const apiGetWeather = location => dispatch => {
  dispatch(requestDate(location));
  return Axios.get(api, {
    params: {
      Authorization: 'CWB-0D72654D-D8EA-41F0-9C54-A62FEF29F0CE',
      locationName: location
    }
  })
  .then(res => {
    setTimeout(()=>dispatch(receiveGet(location, res.data.records.location[0])), 1000);
  })
  .catch(err => console.log(err));
}

const isDataExist = (state, location) => {
  const data = state.getWeather[location];
  if(!data) return true;
  else return false
}

export const getLocationWeather = location => (dispatch, getState) => {
  // if(isDataExist(getState(), location)) {
    return dispatch(apiGetWeather(location));
  // }
}
