import { combineReducers, createStore } from 'redux'
import reducers from '../reducers'

export const initStore = () => {
  return createStore(
    combineReducers(reducers),
  )
}
