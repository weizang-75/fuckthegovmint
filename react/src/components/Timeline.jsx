import React from 'react'
import { useSelector } from 'react-redux'
import { init } from '../person/actions'

export default function Timeline() {

  const personSlice = useSelector( state => state.person )

  React.useEffect(() => {
      const {
        fingerprinting,
        fingerprinted,
      } = personSlice
      if ( !fingerprinting && !fingerprinted ) init ()
  }, [ personSlice ])

  return null
}
