import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
  Dialog,
  Slide,
} from '@material-ui/core'
import { 
  // Covid,
  Omicron,
} from '../flash'

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
  // const appSlice = useSelector( state => state.app )
  const stageSlice = useSelector( state => state.stage )

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
            <Omicron />
          </Dialog>
  }
