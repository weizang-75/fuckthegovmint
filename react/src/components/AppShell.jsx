import React from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { getHistory } from '../'
import { 
  makeStyles,
  Dialog,
  Slide,
} from '@material-ui/core'
import { 
  Covid,
  Omicron,
} from '../flash'
import { setLocation } from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({ 
  flashDialog: {
    borderRadius: theme.spacing( 2 ),
  },
}))

const Transition = React.forwardRef( function Transition( props, ref ) {
  return <Slide direction={ `up` } ref={ ref } { ...props } />
})

export default function AppShell() {
  const classes = useStyles()

  const appSlice = useSelector( state => state.app )
  const { location } = appSlice
  

  const stageSlice = useSelector( state => state.stage )

  React.useEffect(() => {
    let thisLocation = getHistory().location
    const { location } = appSlice
    if ( !location ) setLocation( thisLocation )
  }, [ appSlice ])

  if ( !location ) return null
  const { pathname } = location
  let appComponent = null
  switch ( pathname ) {
      case `/`:
          appComponent = <Covid />
          break
      case `/omicron`:
          appComponent = <Omicron />
          break


      default: {
          return null
      }
  }
  const { 
    width,
    height,
  } = stageSlice
  let isOpen = true
  const maxWidth = `sm`

  return  <Dialog
            open={ isOpen }
            fullScreen={ width < 650 || height < 450 ? true : false }
            classes={{
              paper: classes.flashDialog
            }}
            className={ clsx( classes.flashDialog ) }
            TransitionComponent={ Transition }
            scroll={ `paper` }
            fullWidth
            maxWidth={ maxWidth }
            onClose={ ( e ) => { 
              e.preventDefault()
            }}>
            { appComponent }
          </Dialog>
  }
