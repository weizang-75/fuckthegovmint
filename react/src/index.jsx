import pJSON from '../package.json'
import './theme/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reduxStore from './redux'
import { setSize } from './redux/stage/actions'
import App from './App'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

const store = reduxStore()
export const getStore = () => { return store }

const addEvent = function(object, type, callback) {
    if (object === null || typeof(object) === 'undefined') return
    if (object.addEventListener) {
        object.addEventListener(type, callback, false)
    } else if (object.attachEvent) {
        object.attachEvent( 'on' + type, callback)
    } else {
        object["on"+type] = callback
    }
}
addEvent(window, `resize`, function( event ) {
  setTimeout( () => { 
      setSize() 
  }, 50 )
})
setSize() 

ReactDOM.render( <Provider store={ store }>
                    <App />
                </Provider>, document.getElementById('fuckthegovmint'))

serviceWorkerRegistration.register();