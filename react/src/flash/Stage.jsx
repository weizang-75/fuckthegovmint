import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
  Avatar,
  Typography,
  IconButton,
} from '@material-ui/core'
import { 
  stageAS,
  getSizes,
} from './ActionScript'
import {
  SwitchLocale,
} from '../components'
import {
  getQuestion,
  navigate,
} from '../redux/app/actions'

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
  },
  white:{
    color: 'white',
  },
  centerise:{
    margin: theme.spacing( 2.5 ),
    textAlign: 'center',
  },
}))

export default function Stage() {
  
  const classes = useStyles()
  const appSlice = useSelector( state => state.app )
  const stageSlice = useSelector( state => state.stage )
  const { flash } = stageSlice
  const { locale } = appSlice
  
  
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
  let panelW = 600
  if ( isMobile ) panelW = stageW

  return  <div className={ clsx( classes.stage ) }
            style={{ height: stageH }}>

              <div id={ `logo` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 100, opacity: 0,
                }}>
                <IconButton
                  onClick={ ( e ) => {
                    e.preventDefault()
                    navigate( `https://github.com/weizang-75/fuckthegovmint`, `_blank`)
                  }}>
                  <Avatar 
                    src={`png/binchicken.png` } 
                    className={ clsx( classes.govmintLogo ) }
                  />
                </IconButton>
              </div> 

              <div id={ `locale` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 220, opacity: 0,
                }}>
                <SwitchLocale />
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
                
                <img src={ `png/Square-Tick.png` } alt={ `tick` } />
                
              </div> 

              <div id={ `question` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 400, opacity: 0,
                  // border: '1px solid limegreen',
                  width: panelW,
                }}>
                <Typography
                  gutterBottom
                  variant={ `h4` }
                  className={ clsx( classes.white, classes.centerise ) }
                >
                  { getQuestion ( locale ) }
                </Typography>
               
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
