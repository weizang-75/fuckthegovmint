import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  geo,
  fingerprinting,
  fingerprinted,
} from './actions'

export const personSlice = {
  error: null,
  fingerprinting: false,
  fingerprinted: false,
  geo: null,
}

const personReducer = createReducer( personSlice, {

  [fingerprinting]: (state, action) => {
    state.fingerprinting = action.fingerprinting
    return state
  },

  [fingerprinted]: (state, action) => {
    state.fingerprinted = action.fingerprinted
    return state
  },

  [geo]: (state, action) => {
    state.geo = action.geo
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { personReducer }
