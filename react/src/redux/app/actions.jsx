import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'

export const error = createAction(`APP/ERROR`)
export const open = createAction(`APP/OPEN`)
export const locale = createAction(`APP/LOCALE`)

export const navigate = ( path, target ) => {
  window.open( path, target)
  // if ( target === `_self`) toggleOverlay( true )
  return true
}

export const switchLocale = locale => {
	const store = getStore()
	store.dispatch({ type: `APP/LOCALE`, locale })
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
