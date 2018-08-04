import {createStore, combineReducers, applyMiddleware} from 'redux'
// import {} from './reducer'

const LOCAL_STORAGE_NAME = 'f2e-09-skill-tree'

const stateData = {
  data: []
}

const logger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const saver = store => next => action => {
  let result = next(action)
  localStorage[LOCAL_STORAGE_NAME] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({}),
    (localStorage[LOCAL_STORAGE_NAME]) ?
      JSON.parse(localStorage[LOCAL_STORAGE_NAME]) :
      initialState
  )

export default storeFactory