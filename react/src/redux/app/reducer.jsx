import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  stage,
  bottomBar,
  open,
  published,
  feedback,
} from "./actions"

export const appSlice = {
  pJSON,
  error: null,
  published: false,
  open: false,
  stage: false,
  bottomBar: false,
  feedback: null,
}

const appReducer = createReducer( appSlice, {

  [feedback]: (state, action) => {
    state.feedback = action.feedback
    return state
  },

  [published]: (state, action) => {
    state.published = action.published
    return state
  },
  
  [open]: (state, action) => {
    state.open = action.open
    return state
  },

  [stage]: (state, action) => {
    state.stage = action.stage
    return state
  },

  [bottomBar]: (state, action) => {
    state.bottomBar = action.bottomBar
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }
