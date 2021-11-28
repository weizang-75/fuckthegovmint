import { createAction } from '@reduxjs/toolkit'
import { getStore, getHistory } from '../../'
import { covidAS } from '../../flash/ActionScript'
import { toggleStageReady } from '../stage/actions'
export const error = createAction(`APP/ERROR`)
export const open = createAction(`APP/OPEN`)
export const locale = createAction(`APP/LOCALE`)
export const location = createAction(`APP/LOCATION`)
export const pathname = createAction(`APP/PATHNAME`)

export const setPathname = pathname => {
	toggleStageReady( false )
	const store = getStore()
	store.dispatch({ type: `APP/PATHNAME`, pathname })
	getHistory().push( pathname )
	return true
}

export const setLocation = location => {
	const store = getStore()
	store.dispatch({ type: `APP/LOCATION`, location })
	return true
}

export const switchLocale = locale => {
	const store = getStore()
	store.dispatch({ type: `APP/LOCALE`, locale })
	setTimeout(() => {
		covidAS( `onResize` )
	}, 100)
	return true
}

export const getQuestion = locale => {
	const store = getStore()
	const { locales } = store.getState().app
	for (let i = 0; i < locales.length; i++ ){	
		if (locales[i].code === locale) return locales[i].question
	}
  return ``
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
