import React from 'react'
import { useSelector } from 'react-redux'
import {
  subscribe,
  check,
} from '../redux/settings/actions'
import {
  fingerprint,
} from '../redux/person/actions'

export default function Timeline() {
  
  const personSlice = useSelector( state => state.person )
  const settingsSlice = useSelector( state => state.settings )

  React.useEffect(() => {
      const {
        id,
        subscribing,
        subscribed,
      } = settingsSlice
      if ( id && !subscribing && !subscribed ) subscribe ()
  }, [ settingsSlice ])

  React.useEffect(() => {
      const {
        fingerprinting,
        fingerprinted,
      } = personSlice
      if ( !fingerprinting && !fingerprinted ) fingerprint ()
  }, [ personSlice ])

  React.useEffect(() => {
      const {
        checking,
        checked,
      } = settingsSlice
      if ( !checking && !checked ) check ()
  }, [ settingsSlice ])

  return null
}
