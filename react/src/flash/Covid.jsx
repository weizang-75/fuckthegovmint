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
  covidAS,
  getSizes,
} from './ActionScript'
import {
  SwitchLocale,
} from '../components'
import {
  getQuestion,
  navigate,
  setPathname,
} from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({ 
  stage: {
    position: 'relative',
    zIndex: 99998,
    overflow:'hidden'
  },
  tickBtn:{
    // border: '1px solid white',
    padding: 0,
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
  yellow:{
    color: '#f1fd37',
  },
  centerise:{
    margin: theme.spacing( 2.5 ),
    textAlign: 'center',
  },
}))

export default function Covid() {
  
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
      setTimeout(() => { covidAS( `setup` ) }, 10)
    }
    document.title = `COVID-19 Certificate`
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

              <div id={ `omicronUpdate` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 350, opacity: 1,
                }}>
                <Typography
                  gutterBottom
                  variant={ `button` }
                  className={ clsx( classes.yellow) }>
                  Omicron update
                </Typography>
              </div>

              <div id={ `tick` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 300, opacity: 0,
                }}>
                <IconButton
                  className={ clsx( classes.tickBtn ) }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    setPathname( `/omicron` )
                  }}>
                  <img src={ `png/Square-Tick.png` } alt={ `tick` } />
                </IconButton>
              </div>

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
                  className={ clsx( classes.white, classes.centerise ) }>
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
