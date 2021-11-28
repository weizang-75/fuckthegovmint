import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  open,
  locale,
  location,
} from "./actions"
import { locales } from './locales'

export const appSlice = {
  pJSON,
  error: null,
  open: false,
  locale: `au`,
  locales,
  location: null,
}

const appReducer = createReducer( appSlice, {
  
  [location]: (state, action) => {
    state.location = action.location
    return state
  },

  [locale]: (state, action) => {
    state.locale = action.locale
    return state
  },

  [open]: (state, action) => {
    state.open = action.open
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }
