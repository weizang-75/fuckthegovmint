import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  fingerprinting,
  fingerprinted,
  subscribing,
  subscribed,
  person,
  checking,
  checked,
  id,
  geo,
} from "./actions"

export const personSlice = {
  error: null,
  person: {
    open: false,
  },
  fingerprinting: false,
  fingerprinted: false,
  geo: null,
  subscribing: false,
  subscribed: false,
  settings: null,
  checking: false,
  checked: false,
  id: null,
}

const personReducer = createReducer( personSlice, {

  [geo]: (state, action) => {
    state.geo = action.geo
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
  
  [person]: (state, action) => {
    state.person = action.person
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

export { personReducer }
