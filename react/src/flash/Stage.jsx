import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
} from '@material-ui/core'
import {
  setScreen,
  setMainmenu,
  setMessages,
  setNewmessage,
} from '../redux/stage/actions'
import { 
  stage,
  getSizes,
  mainmenuAS,
  messagesAS,
  newmessageAS,
} from './ActionScript'
import { 
  Messages,
  MainMenu,
  NewMessage,
} from '../components'

const useStyles = makeStyles((theme) => ({ 
  stage: {
    position: 'relative',
    zIndex: 99998,
    overflow:'hidden'
  },
  movieClip:{
    position: 'absolute',
  },
}))

export default function Stage() {
  
  const classes = useStyles()
  const settingsSlice = useSelector( state => state.settings )
  const stageSlice = useSelector( state => state.stage )
  const { settings } = settingsSlice
  if ( !settings ) return null
  const { flash } = stageSlice
  
  React.useEffect(() => {

    const {
      stageReady,
      mainmenu,
      messages,
      screen,
      newmessage,
    } = stageSlice

    if ( !stageReady ) {
      setTimeout(() => { stage( `setup` ) }, 10)
      setScreen ( screen )
    }

    if ( !newmessage.playing && newmessage.playhead === `notsetup` ){
      setTimeout(() => {  newmessageAS( `setup` ) },   50)
      setNewmessage({ playhead: `issetup`, playing: false })
    } 

    if ( !messages.playing && messages.playhead === `notsetup` ){
      setTimeout(() => {  messagesAS( `setup` ) },   50)
      setMessages({ playhead: `issetup`, playing: false })
    } 

    if ( !mainmenu.playing && mainmenu.playhead === `notsetup` ){
      setTimeout(() => {  mainmenuAS( `setup` ) }, 40)
      setMainmenu( ({ playhead: `issetup`, playing: false }))
    } 

  }, [ stageSlice ])

  let liveAppBg = null
  const { appBg } = flash
  if ( appBg !== `none` && appBg !== `` ) liveAppBg = appBg
  const sizes = getSizes()
  const {
    stageH,
    stageW,
    appBgW,
    appBgH,
    isMobile,
  } = sizes

  let panelW = 400
  if ( isMobile ) panelW = stageW - 50

  return  <div className={ clsx( classes.stage ) }
            style={{ height: stageH }}>

              <div id={ `mainmenu` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 550, opacity: 0,
                  width: panelW,
                }}>
                <MainMenu sizes={ sizes }/>
              </div> 

              <div id={ `newmessage` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 501, opacity: 0,
                  width: panelW,
                }}>
                <NewMessage sizes={ sizes }/>
              </div> 

              <div id={ `messages` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 450, opacity: 0,
                  width: panelW,
                }}>
                <Messages sizes={ sizes }/>
              </div> 

              <div id={ `appBg` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 1,
                  width: appBgW, height: appBgH,
                }}>
                { liveAppBg ? <img 
                  style={{ 
                    width: '100%', height: '100%', 
                  }}
                  src={ liveAppBg } 
                  alt={ `App Background` }/> : null }
             </div>  

           </div>
  }
