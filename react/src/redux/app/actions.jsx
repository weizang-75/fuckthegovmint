import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import { 
	setMainmenu,
	setMessages,
	setNewmessage,
	toggleStageReady, 
} from '../stage/actions'

export const error = createAction(`APP/ERROR`) 
export const stage = createAction(`APP/STAGE`) 
export const bottomBar = createAction(`APP/BOTTOMBAR`)
export const open = createAction(`APP/OPEN`)
export const published = createAction(`APP/PUBLISH`)
export const feedback = createAction(`APP/FEEDBACK`)

export const toggleOpen = ( open ) => {
	setMainmenu({ playhead: `notsetup`, playing: false })
	setMessages({ playhead: `notsetup`, playing: false })
	setNewmessage({ playhead: `notsetup`, playing: false })
	toggleStageReady( false )
	const store = getStore()
	store.dispatch({ type: `APP/OPEN`, open })
	return true
}

export const openFeedback = feedback => {
  const store = getStore()
  store.dispatch({ type: `APP/FEEDBACK`, feedback })
  return true
}

export const closeFeedback = () => {
  const store = getStore()
  store.dispatch({ type: `APP/FEEDBACK`, feedback: null })
  return true
}

export const togglePublished = ( published ) => {
	const store = getStore()
	store.dispatch({ type: `APP/PUBLISH`, published })
	return true
}

export const toggleBottomBar = bottomBar => {
	const store = getStore()
	store.dispatch({ type: `APP/BOTTOMBAR`, bottomBar })
	return true
}

export const navigate = ( path, target ) => {
  window.open( path, target)
  // if ( target === `_self`) toggleOverlay( true )
  return true
}

export const toggleStage= stage => {
	const store = getStore()
	store.dispatch({ type: `APP/STAGE`, stage })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return true
}
