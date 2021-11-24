import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { stageReducer, stageSlice } from './stage/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    stage: stageReducer,
  })

  const preloadedState = {
    app: appSlice,
    stage: stageSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default reduxStore