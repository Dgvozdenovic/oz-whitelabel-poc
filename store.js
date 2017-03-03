import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from "redux-logger"
import reducer from "./rdx/reducers"

const middleware = applyMiddleware(thunkMiddleware, logger())

export const initStore = (initialState) => {
  return createStore(reducer, initialState, middleware)
}
