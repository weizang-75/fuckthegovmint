import { createAction } from '@reduxjs/toolkit'
// import parseUa from 'ua-parser-js'
import { getStore, getFStore } from '../'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import { 
	collection, 
	query, 
	where,
	getDocs,
	addDoc,
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
    	// console.log ( 'person init' )
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
		let f = `${ visitorId }`
		lookup ( f )
		store.dispatch({type: `PERSON/FINGERPRINT`, fingerprint: f })
		store.dispatch({type: `PERSON/FINGERPRINTED`, fingerprinted: true })
		return true
    } catch ( error ) {
        throwError( error )
    }
}

export const lookup = async ( f ) => {
	const q = query( collection( getFStore(), `people`), where( `fingerprint`, `==`, f ))
	const qSnap = await getDocs( q )
		let person = null
		qSnap.forEach(( doc ) => {
			person = {
				id: doc.id,
				...doc.data()
			}
		})
		if ( person ){
			console.log ( 'update', person )
		} else {
			create ( f )
		}	
}

export const create = async ( f ) => {
    try {
    	const store = getStore()
    	const geo = store.getState().person.geo
    	const { width, height } = store.getState().stage
    	// parsedUa: parseUa(),
    	let newPerson = {
    		fingerprint: f,
    		geo,
    		host: window.location.host,
    		href: window.location.href,
    		querystring: window.location.search,
    		pathname: window.location.pathname,
    		referrer: document.referrer,
    		title: document.title,

    		screenSize: {
				width,
				height,
			},
    	}
    	console.log ( 'creating', newPerson )
    	const docRef = await addDoc(collection( getFStore(), `people`), newPerson)
    	console.log ( 'docRef.id', docRef.id )
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
