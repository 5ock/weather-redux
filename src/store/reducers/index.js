import { combineReducers } from 'redux'
import  { REQUEST, RECEIVE, SELECT_LOCATION} from '../action/actionsTypes'

const selectLocation = (state='台北市', action) => {
    switch(action.type) {
        case SELECT_LOCATION:
            return action.location;
        default:
            return state;
    }
}

const initObj = {
    isLoading: false,
    isAlreadyGet: false,
    items: []
}

const weather = (state, action) => {
    switch(action.type) {
        case REQUEST:
            return {
                ...state,
                isLoading: true,
                isAlreadyGet: false,
                items: {}
            }
        case RECEIVE:
            return {
                ...state,
                isLoading: false,
                isAlreadyGet: true,
                items: action.getData
            }
        default:
            return state
    }
}

const getWeather = (state={}, action) => {
    switch(action.type) {
        case REQUEST:
        case RECEIVE:
            return {
                ...state,
                [action.location]: weather(state[action.location], action)
            }
        default:
            return state;
    }
}

const weatherReducer = combineReducers({
    selectLocation,
    getWeather
})

export default weatherReducer;