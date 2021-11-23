import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
  Dialog,
  Slide,
} from '@material-ui/core'
import {
  BottomFab,
  Timeline,
  Feedback,
  TopAppBar,
} from './'
import { 
  Stage,

} from '../flash'

const useStyles = makeStyles((theme) => ({ 
  flashDialog: {
    zIndex: 99998,
  },
}))

const Transition = React.forwardRef( function Transition( props, ref ) {
  return <Slide direction={ `up` } ref={ ref } { ...props } />
})

export default function Flash() {
  const classes = useStyles()
  const appSlice = useSelector( state => state.app )
  const settingsSlice = useSelector( state => state.settings )
  const stageSlice = useSelector( state => state.stage )
  const { 
    width,
    height,
  } = stageSlice
  const { 
    open,
    published,
  } = appSlice
  let isOpen = false
  if ( open ) isOpen = true
  const maxWidth = `sm`
  const {
    settings,
  } = settingsSlice
  let flash = null
  if (settings){
    flash = settings.flash
  }

  return  <React.Fragment>
            <Timeline />
            <Feedback />
            { published ? <React.Fragment>
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
                <TopAppBar />
                  <Stage flash={ flash } />
              </Dialog>
              <BottomFab />
            </React.Fragment> : null }
          </React.Fragment>
  }
