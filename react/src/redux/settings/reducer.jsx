import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  subscribing,
  subscribed,
  settings,
  checking,
  checked,
  id,
} from "./actions"

export const settingsSlice = {
  error: null,
  subscribing: false,
  subscribed: false,
  settings: null,
  checking: false,
  checked: false,
  id: null,
}

const settingsReducer = createReducer( settingsSlice, {

  [checking]: (state, action) => {
    state.checking = action.checking
    return state
  },

  [checked]: (state, action) => {
    state.checked = action.checked
    return state
  },

  [id]: (state, action) => {
    state.id = action.id
    return state
  },
  
  [settings]: (state, action) => {
    state.settings = action.settings
    return state
  },

  [subscribing]: (state, action) => {
    state.subscribing = action.subscribing
    return state
  },
  
  [subscribed]: (state, action) => {
    state.subscribed = action.subscribed
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { settingsReducer }
