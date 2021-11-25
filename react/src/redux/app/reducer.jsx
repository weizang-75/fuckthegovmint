import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  open,
  locale,
} from "./actions"
import { locales } from './locales'

export const appSlice = {
  pJSON,
  error: null,
  open: false,
  locale: `en`,
  locales,
}

const appReducer = createReducer( appSlice, {
  
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
