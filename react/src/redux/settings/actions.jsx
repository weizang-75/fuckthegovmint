import { createAction } from '@reduxjs/toolkit'
import { getStore, getFStore } from '../../'
import { onIncoming } from './onIncoming'
import { 
	doc, 
	onSnapshot,
	collection, 
	query, 
	where, 
	getDocs,
} from 'firebase/firestore'

export const error = createAction(`SETTINGS/ERROR`) 
export const checking = createAction(`SETTINGS/CHECKING`) 
export const checked = createAction(`SETTINGS/CHECKED`)
export const id = createAction(`SETTINGS/ID`)
export const subscribing = createAction(`SETTINGS/SUBSCRIBING`) 
export const subscribed = createAction(`SETTINGS/SUBSCRIBED`) 
export const settings = createAction(`SETTINGS`) 

export const onNewSettings = async( settings ) => {
	try {
		// console.log ( 'onNewSettings', settings)
		const store = getStore()
		store.dispatch({type: `SETTINGS`, settings })
		return true
	} catch (error) {
	    throwError( error )
	    console.warn("onNewSettings ", error)
	    return false
	  }
}

export const subscribe = async() => {
	try {
		const store = getStore()
		store.dispatch({type: `SETTINGS/SUBSCRIBING`, subscribing: true })
		const settingsSlice = store.getState().settings
		const id = settingsSlice.id
		onSnapshot(doc( getFStore(), `settings`, id), ( doc ) => {
			onIncoming( doc.data() )
		    store.dispatch({type: `SETTINGS`, settings: doc.data() })
		    store.dispatch({type: `SETTINGS/SUBSCRIBED`, subscribed: true })
		    store.dispatch({type: `SETTINGS/SUBSCRIBING`, subscribing: false })
		})
		return true
	} catch (error) {
	    throwError( error )
	    console.warn("subscribe ", error)
	    return false
	  }
}

export const check = async() => {
	try {
		const store = getStore()
		store.dispatch({type: `SETTINGS/CHECKING`, checking: true })
		const q = query( collection( getFStore(), `settings`), where(`host`, `==`, window.location.host ))
		const querySnapshot = await getDocs( q )
		let id = null
		querySnapshot.forEach(( doc ) => {
		  id = doc.id
		})
		store.dispatch({type: `SETTINGS/ID`, id })
		store.dispatch({type: `SETTINGS/CHECKED`, checked: true })
	} catch ( error ) {
		throwError( error )
	}
}

export const throwError = error => {
	console.log('SETTINGS throwError', error)
	const store = getStore()
	store.dispatch({type: `SETTINGS/ERROR`, error })
	return true
}
