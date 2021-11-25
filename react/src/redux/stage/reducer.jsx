import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  width, 
  height,
  flash,
  stageReady,
  reply,
  mainmenu,
  screen,
  messages,
  newmessage,
} from "./actions"

export const stageSlice = {
  error: null,
  screen: `mainmenu`,
  width: 0,
  height: 0,
  flash: {
    // appBg: `i-will-not.jpg`,
    appBg: null,
    logoIcon: `logo192.png`,
  },
  stageReady: false,
  reply: { playhead: `notsetup`, playing: false },
  mainmenu: { playhead: `notsetup`, playing: false },
  messages: { playhead: `notsetup`, playing: false },
  newmessage: { playhead: `notsetup`, playing: false },
}


const stageReducer = createReducer( stageSlice, {

  [newmessage]: (state, action) => {
    state.newmessage = action.newmessage
    return state
  },
  
  [messages]: (state, action) => {
    state.messages = action.messages
    return state
  },
  
  [screen]: (state, action) => {
    state.screen = action.screen
    return state
  },
  
  [mainmenu]: (state, action) => {
    state.mainmenu = action.mainmenu
    return state
  },

  [reply]: (state, action) => {
    state.reply = action.reply
    return state
  },
  
  [stageReady]: (state, action) => {
    state.stageReady = action.stageReady
    return state
  },
  
  [flash]: (state, action) => {
    state.flash = action.flash
    return state
  },
  
  [height]: (state, action) => {
    state.height = action.height
    return state
  },

  [width]: (state, action) => {
    state.width = action.width
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { stageReducer }
