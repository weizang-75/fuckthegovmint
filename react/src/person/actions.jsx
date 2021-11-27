import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

export const error = createAction(`PERSON/ERROR`)
export const fingerprinting = createAction(`PERSON/FINGERPRINTING`)
export const fingerprinted = createAction(`PERSON/FINGERPRINTED`)
export const fingerprint = createAction(`PERSON/FINGERPRINT`)
export const geo = createAction(`PERSON/GEO`)

export const init = async () => {
    try {
    	const store = getStore()
		store.dispatch({type: `PERSON/FINGERPRINTING`, fingerprinting: true })
		const response = await fetch('https://geolocation-db.com/json/')
	  	const geo = await response.json()
	  	store.dispatch({type: `PERSON/GEO`, geo })
	  	const fpPromise = FingerprintJS.load()
		const fp = await fpPromise
		const result = await fp.get()
		const visitorId = result.visitorId
		let f = `${ geo.IPv4 }_${ visitorId }`
	  	// console.log('f', f)
		// check ( f )
		store.dispatch({type: `PERSON/FINGERPRINT`, fingerprint: f })
		store.dispatch({type: `PERSON/FINGERPRINTED`, fingerprinted: true })
		return true
    } catch ( error ) {
        throwError( error )
    }
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `PERSON/ERROR`, error })
	return true
}
