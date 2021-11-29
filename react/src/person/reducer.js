import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  geo,
  fingerprinting,
  fingerprinted,
  fingerprint,
  initting,
  initted,
} from './actions'

export const personSlice = {
  error: null,
  fingerprinting: false,
  fingerprinted: false,
  fingerprint: null,
  geo: null,
  initting: false,
  initted: false,
}

const personReducer = createReducer( personSlice, {

  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },

  [initting]: (state, action) => {
    state.initting = action.initting
    return state
  },

  [fingerprint]: (state, action) => {
    state.fingerprint = action.fingerprint
    return state
  },
  
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
