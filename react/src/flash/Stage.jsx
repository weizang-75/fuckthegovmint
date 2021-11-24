import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
  Avatar,
} from '@material-ui/core'
import { 
  stageAS,
  getSizes,
} from './ActionScript'

const useStyles = makeStyles((theme) => ({ 
  stage: {
    position: 'relative',
    zIndex: 99998,
    overflow:'hidden'
  },
  movieClip:{
    position: 'absolute',
  },
  govmintLogo:{
    width: 120,
    height: 120,
  }

}))

export default function Stage() {
  
  const classes = useStyles()
  const stageSlice = useSelector( state => state.stage )
  const { flash } = stageSlice
  
  React.useEffect(() => {

    const {
      stageReady,
    } = stageSlice

    if ( !stageReady ) {
      setTimeout(() => { stageAS( `setup` ) }, 10)
    }

  }, [ stageSlice ])

  const sizes = getSizes()
  const {
    stageH,
    stageW,
    appBgW,
    appBgH,
    isMobile,
  } = sizes

  let panelW = 450
  if ( isMobile ) panelW = stageW - 50

  return  <div className={ clsx( classes.stage ) }
            style={{ height: stageH }}>

              <div id={ `logo` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 100, opacity: 0,
                }}>

                <Avatar 
                  src={`png/stralia.png` } 
                  className={ clsx( classes.govmintLogo ) }
                />
              </div> 

              <div id={ `certificate` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 200, opacity: 0,
                  width: 200, height: 75,
                }}>
                <img src={ `png/certificate.png` } alt={ `certificate` } />
              </div> 

              <div id={ `tick` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 300, opacity: 0,
                }}>
                <img src={ `png/tick.png` } alt={ `tick` } />
              </div> 

              <div id={ `message` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 400, opacity: 0,
                  width: panelW,
                }}>
                aldsdils
              </div> 

              <div id={ `appBg` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 1,
                  width: appBgW, height: appBgH,
                }}>
                { flash.appBg ? <img 
                  style={{ width: '100%', height: '100%' }}
                  src={ flash.appBg } 
                  alt={ `App Background` }/> : null }
             </div>  

           </div>
  }
