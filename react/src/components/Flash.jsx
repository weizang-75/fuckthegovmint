import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
  Dialog,
  Slide,
} from '@material-ui/core'
import {
  Timeline,
} from './'
import { 
  Stage,
} from '../flash'

const useStyles = makeStyles((theme) => ({ 
  flashDialog: {
    // zIndex: 99998,
    // border: '1px solid white',
    borderRadius: theme.spacing( 2 ),
  },
}))

const Transition = React.forwardRef( function Transition( props, ref ) {
  return <Slide direction={ `up` } ref={ ref } { ...props } />
})

export default function Flash() {
  const classes = useStyles()
  // const appSlice = useSelector( state => state.app )
  const stageSlice = useSelector( state => state.stage )
  const { 
    width,
    height,
  } = stageSlice
  // const { 
  //   open,
  // } = appSlice
  let isOpen = true
  const maxWidth = `sm`
  let flash = {
    appBg: `dlajsdln`,
  }

  return  <React.Fragment>
            <Timeline />
            <React.Fragment>
              <Dialog
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
                <Stage flash={ flash } />
              </Dialog>
            </React.Fragment>
          </React.Fragment>
  }
