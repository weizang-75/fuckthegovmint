import React from 'react'
import { useSelector } from 'react-redux'
import { fingerprint } from '../person/actions'

export default function Timeline() {

  const personSlice = useSelector( state => state.person )

  React.useEffect(() => {
      const {
        fingerprinting,
        fingerprinted,
      } = personSlice
      if ( !fingerprinting && !fingerprinted ) fingerprint ()
  }, [ personSlice ])

  return null
}
