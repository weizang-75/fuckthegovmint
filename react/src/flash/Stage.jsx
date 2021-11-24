import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
} from '@material-ui/core'
import { 
  stageAS,
  getSizes,
} from './ActionScript'
import { 
  MainMenu,
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

              <div id={ `tick` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 850, opacity: 1,
                }}>
                <img src={ `png/tick.png` } alt={ `tick` } />
              </div> 

              <div id={ `certificate` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 750, opacity: 1,
                }}>
                <img src={ `png/certificate.png` } alt={ `certificate` } />
              </div> 

              <div id={ `logo` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 650, opacity: 1,
                }}>
                <img src={ `logo192.png` } alt={ `logo192` } />
              </div> 

              <div id={ `mainmenu` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 550, opacity: 1,
                  width: panelW,
                }}>
                <MainMenu sizes={ sizes }/>
              </div> 

              <div id={ `appBg` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 1,
                  width: appBgW, height: appBgH,
                }}>
                { flash.appBg ? <img 
                  style={{ 
                    width: '100%', height: '100%', 
                  }}
                  src={ flash.appBg } 
                  alt={ `App Background` }/> : null }
             </div>  

           </div>
  }
