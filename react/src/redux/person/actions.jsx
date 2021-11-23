import { createAction } from '@reduxjs/toolkit'
import parseUa from 'ua-parser-js'
import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { getStore, getFStore } from '../../'
import { onIncoming } from './onIncoming'
import { 
	doc, 
	setDoc,
	addDoc,
	onSnapshot,
	collection, 
	query, 
	where, 
	getDocs,
} from 'firebase/firestore'
import { 
	randomCharacter,
	randomYear,
} from '../../lib'

export const error = createAction(`PERSON/ERROR`)
export const fingerprinting = createAction(`PERSON/FINGERPRINTING`) 
export const fingerprinted = createAction(`PERSON/FINGERPRINTED`) 
export const geo = createAction(`PERSON/GEO`) 
export const checking = createAction(`PERSON/CHECKING`) 
export const checked = createAction(`PERSON/CHECKED`)
export const subscribing = createAction(`PERSON/SUBSCRIBING`) 
export const subscribed = createAction(`PERSON/SUBSCRIBED`)
export const id = createAction(`PERSON/ID`) 
export const person = createAction(`PERSON`) 

export const sendMessage = async( message ) => {
  try {
    const store = getStore()
		const {
			settings,
			person,
		} = store.getState()
		const {
			messages,
		} = person.person
		let newMessage = {
			time: Date.now(),
			hostId: settings.id,
			personId: person.id,
			origin: `app`,
			seen: false,
			message,
		}
		const newMessages = [ newMessage, ...messages  ]
    	const personRef = doc( getFStore(), 'people', person.id)
	    await setDoc( personRef , { 
	      updated: Date.now(),
	      messages: newMessages
	    }, { merge: true })
    	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/notify/newmessage` 
    	let body = {
    		message: newMessages[0],
    		person: person.person,
    		settings: settings.settings,
			}
			axios.post( endpoint, body )
				.then( function( res ) {		
					console.log ('response', res.data.response)
					return true
				})
				.catch(function( error ) {
					throwError( error.stack )
					return false
				})
    return true
  } catch (error) {
  	throwError( error.stack )
    return false
  }
}

export const setSeen = async( messages ) => {
	// console.log ('setSeen', messages )
    const store = getStore()
    const { id } = store.getState().person
    const personRef = doc( getFStore(), 'people', id)
    await setDoc( personRef , { 
      updated: Date.now(),
      messages,
    }, { merge: true })
    return true
}

export const reply = async( messageIndex ) => {
	console.log ('reply parent', messageIndex)
    return true
}

export const deleteMessage = async( messageIndex ) => {
	console.log ('deleteMessage', messageIndex)
    return true
}

export const updatePerson = async( key, value ) => {
	// console.log ('updatePerson', key, value)
    const store = getStore()
    const { id } = store.getState().person
    const personRef = doc( getFStore(), 'people', id)
    await setDoc( personRef , { 
      updated: Date.now(),
      [key]: value
    }, { merge: true })
    const { subscribed, subscribing } = store.getState().person
    if ( !subscribed && !subscribing ) subscribe( id )
    return true
}

export const update = ( key, value ) => {
    const store = getStore()
    let person = store.getState().person.person
    person = {
        ...person,
        [key]: value,
    }
    store.dispatch({ type: `PERSON`, person })
    return true
}

export const create = async( fingerprint ) => {
	try {
		const store = getStore()
		const { geo } = store.getState().person
		const { width, height } = store.getState().stage
		const host = window.location.host
		const href = window.location.href
		const querystring = window.location.search
		const route = window.location.pathname
		const referrer = document.referrer
		const title = document.title
		const character = randomCharacter()
		const name = `${ character.name }${ randomYear() }`
		const avatar = character.avatar
		const ip = geo.IPv4
		const city = geo.city
		const countryCode = geo.country_code
		const countryName = geo.country_name
		const lat = geo.latitude
		const lng = geo.longitude
		const region = geo.state
		const screenSize = {
			width,
			height,
		}
		const parsedUa = parseUa()
		let browser = ``
		let os = ``
		let device = `Desktop`
		const {
			ua
		} = parsedUa
		if ( parsedUa.browser.name ) {
			browser = parsedUa.browser.name
		}
		if ( parsedUa.os.name ) {
			os = parsedUa.os.name
		}
		if ( parsedUa.device.model ) {
			device = `${ parsedUa.device.model ? parsedUa.device.model : null } ${ parsedUa.device.type ? parsedUa.device.type : null } ${ parsedUa.device.vendor ? parsedUa.device.vendor : null }`
		}
		const newPerson = {
			created: Date.now(),
			updated: Date.now(),
			defaultOpen: false,
			hits: 1,
			name,
			avatar,
			host,
			fingerprint,
			userAgent: {
				browser,
				os,
				device,
				screenSize,
				ua,		
			},
			history: [
				{
					time: Date.now(),
					href,
					route,
					referrer,
					querystring,
					title,
				},
			],
			geo: {
				countryName,
				region,
				city,
				lng,
				lat,
				countryCode,
				ip,
			},
			messages: [],
		}
		const docRef = await addDoc(collection( getFStore(), `people`), newPerson)
		store.dispatch({type: `PERSON/ID`, id: docRef.id })
		notify( `newPerson`, newPerson, docRef.id )
		subscribe( docRef.id )
		return true

	} catch ( error ) {
		throwError( error )
	}
}

export const subscribe = async( id ) => {
	try {
		const store = getStore()
		store.dispatch({type: `PERSON/SUBSCRIBING`, subscribing: true })
		onSnapshot(doc( getFStore(), `people`, id), ( doc ) => {
			onIncoming( doc.data() )
			store.dispatch({type: `PERSON`, person: {
				...doc.data(),
				id: doc.id,
			}})
			const { subscribed } = store.getState().person
			if ( !subscribed ) store.dispatch({type: `PERSON/SUBSCRIBED`, subscribed: true })
		})
		return true
	} catch (e) {
	  console.error("Error subscribe ", e)
	  return false
	}
}

export const check = async( fingerprint ) => {
	try {
		const store = getStore()
		store.dispatch({type: `PERSON/CHECKING`, checking: true })
		const q = query( collection( getFStore(), `people`), where( `fingerprint`, `==`, fingerprint ))
		const querySnapshot = await getDocs( q )
		let id = null
		let person = null
		querySnapshot.forEach(( doc ) => {
		  id = doc.id
		  person = doc.data()
		})
		if ( !id ) {
			create ( fingerprint )
		} else {
			store.dispatch({type: `PERSON/ID`, id })
			const { hits, history } = person
			const newHits = hits + 1
			updatePerson( `hits`, newHits )
			let newHistory = history
			newHistory.unshift({
				time: Date.now(),
				href: window.location.href,
				route: window.location.pathname,
				referrer: document.referrer,
				querystring: window.location.search,
				title: document.title,
			})
			updatePerson( `history`, newHistory )
		}
		store.dispatch({type: `PERSON/CHECKED`, checked: true })
		return true
	} catch ( error ) {
		throwError( error )
	}
}

export const fingerprint = async () => {
    try {
    	const store = getStore()
			store.dispatch({type: `PERSON/FINGERPRINTING`, fingerprinting: true })
			const response = await fetch('https://geolocation-db.com/json/');
	    	const data = await response.json();
	    	store.dispatch({type: `PERSON/GEO`, geo: data })
	    	const fpPromise = FingerprintJS.load()
	        const fp = await fpPromise
			const result = await fp.get()
			const visitorId = result.visitorId
			let host = window.location.host
			let f = `${ host }_${ data.IPv4 }_${ visitorId }`
			update( `fingerprint`, f )
			check ( f )
			return true
    } catch ( error ) {
        throwError( error )
    }
}

export const notify = ( event, person, id ) => {
	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/notify/newperson` 

	const store = getStore()
  let settings = store.getState().settings.settings
	let body = {
		id,
		event,
		person,
		settings,
	}
	axios.post( endpoint, body )
		.then( function( res ) {	
			console.log ('response', res.data.response)	
			return true
		})
		.catch(function( error ) {
			throwError( error.stack )
			return false
		})
}

export const throwError = error => {
	console.log('PERSON throwError', error)
	const store = getStore()
	store.dispatch({type: `PERSON/ERROR`, error })
	return true
}
