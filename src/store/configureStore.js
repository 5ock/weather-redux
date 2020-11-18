import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
import weatherReducer from './reducers'

// const loggerMiddleware = createLogger()

const itemStore = createStore(weatherReducer, applyMiddleware(thunk));

export default itemStore;