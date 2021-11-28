import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import { 
	covidAS,
} from '../../flash/ActionScript/'

export const error = createAction(`STAGE/ERROR`) 
export const width = createAction(`STAGE/WIDTH`) 
export const height = createAction(`STAGE/HEIGHT`)
export const flash = createAction(`STAGE/FLASH`)
export const appBgLoaded = createAction(`STAGE/APPBG`)
export const stageReady = createAction(`STAGE/STAGEREADY`)
export const reply = createAction(`STAGE/REPLY`)
export const mainmenu = createAction(`STAGE/MAINMENU`)
export const screen = createAction(`STAGE/SCREEN`)
export const messages = createAction(`STAGE/MESSAGES`)
export const newmessage = createAction(`STAGE/NEWMESSAGE`)


export const setNewmessage = newmessage => {
	const store = getStore()
	store.dispatch({type: `STAGE/NEWMESSAGE`, newmessage })
	return true
}

export const setSize = () => {
	const store = getStore()
	const width = document.documentElement.clientWidth
	const height = document.documentElement.clientHeight
	store.dispatch({type: `STAGE/WIDTH`, width })
	store.dispatch({type: `STAGE/HEIGHT`, height })
	setTimeout( () => {
		covidAS( `onResize` )
	}, 100)
	return true
}

export const setMessages = messages => {
	const store = getStore()
	store.dispatch({type: `STAGE/MESSAGES`, messages })
	return true
}

export const setMainmenu = mainmenu => {
	const store = getStore()
	store.dispatch({type: `STAGE/MAINMENU`, mainmenu })
	return true
}

export const setReply = reply => {
	const store = getStore()
	store.dispatch({type: `STAGE/REPLY`, reply })
	return true
}

export const setUnseen = unseen => {
	const store = getStore()
	store.dispatch({type: `STAGE/UNSEEN`, unseen })
	return true
}

export const toggleStageReady = ( stageReady ) => {
	const store = getStore()
	store.dispatch({type: `STAGE/STAGEREADY`, stageReady })
	return true
}

export const toggleAppBgLoaded = ( appBgLoaded ) => {
	const store = getStore()
	store.dispatch({type: `STAGE/APPBG`, appBgLoaded })
	return true
}

export const updateFlash = flash => {
	const store = getStore()
	store.dispatch({type: `STAGE/FLASH`, flash })
	return true
}

export const setPlayhead = playhead => {
	const store = getStore()
	store.dispatch({type: `STAGE/PLAYHEAD`, playhead })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `STAGE/ERROR`, error })
	return true
}
