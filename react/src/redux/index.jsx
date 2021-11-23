import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { settingsReducer, settingsSlice } from './settings/reducer'
import { stageReducer, stageSlice } from './stage/reducer'
import { personReducer, personSlice } from './person/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    settings: settingsReducer,
    stage: stageReducer,
    person: personReducer,
  })

  const preloadedState = {
    app: appSlice,
    settings: settingsSlice,
    stage: stageSlice,
    person: personSlice,
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