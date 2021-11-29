import { createAction } from '@reduxjs/toolkit'
import { getStore, getFStore } from '../'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import { 
	collection, 
	query, 
	where,
	getDocs,
} from 'firebase/firestore'

export const error = createAction(`PERSON/ERROR`)
export const initting = createAction(`PERSON/INITTING`)
export const initted = createAction(`PERSON/INITTED`)
export const fingerprinting = createAction(`PERSON/FINGERPRINTING`)
export const fingerprinted = createAction(`PERSON/FINGERPRINTED`)
export const fingerprint = createAction(`PERSON/FINGERPRINT`)
export const geo = createAction(`PERSON/GEO`)


export const init = async () => {

    try {
    	console.log ( 'person init' )
    	const store = getStore()
    	store.dispatch({type: `PERSON/INITTING`, initting: true })
		store.dispatch({type: `PERSON/FINGERPRINTING`, fingerprinting: true })
		const response = await fetch('https://geolocation-db.com/json/')
	  	const geo = await response.json()
	  	store.dispatch({type: `PERSON/GEO`, geo })
	  	const fpPromise = FingerprintJS.load()
		const fp = await fpPromise
		const result = await fp.get()
		const visitorId = result.visitorId
		let f = `${ geo.IPv4 }_${ visitorId }`
		lookup ( f )
		store.dispatch({type: `PERSON/FINGERPRINT`, fingerprint: f })
		store.dispatch({type: `PERSON/FINGERPRINTED`, fingerprinted: true })
		return true
    } catch ( error ) {
        throwError( error )
    }
}

export const lookup = async ( f ) => {
	console.log ( 'lookup', f )
	const q = query( collection( getFStore(), `people`), where( `fingerprint`, `==`, f ))
	const qSnap = await getDocs( q )

		let id = null
		// let person = null
		
		qSnap.forEach(( doc ) => {
			id = doc.id
			//person = doc.data()
		})
		if (id){
			console.log ( 'update', id )
		} else {
			console.log ( 'create' )
		}
		
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `PERSON/ERROR`, error })
	return true
}
