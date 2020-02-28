import { createStore, applyMiddleware } from 'redux'

import thunk from "redux-thunk"
import axios from "axios"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
import reducer from './Reducers'
const middleware = applyMiddleware(thunk, logger, promise)

export default createStore(reducer, middleware)