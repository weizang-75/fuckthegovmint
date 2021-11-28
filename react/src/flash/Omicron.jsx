/*
  Omicron
  omicron > moronic
  who is calling whom a moron?
*/
import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
} from '@material-ui/core'
import { 
  omicronAS,
  getSizes,
} from './ActionScript'
// import {
//   getQuestion,
//   navigate,
// } from '../redux/app/actions'

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

export default function Omnicron() {
  
  const classes = useStyles()
  // const appSlice = useSelector( state => state.app )
  const stageSlice = useSelector( state => state.stage )
  const { flash } = stageSlice
  // const { locale } = appSlice
  
  
  React.useEffect(() => {

    const {
      stageReady,
    } = stageSlice

    if ( !stageReady ) {
      setTimeout(() => { omicronAS( `setup` ) }, 10)
    }

  }, [ stageSlice ])

  const sizes = getSizes()
  const {
    stageH,
    // stageW,
    appBgW,
    appBgH,
    // isMobile,
  } = sizes
  // let panelW = 600
  // if ( isMobile ) panelW = stageW

  return  <div className={ clsx( classes.stage ) }
            style={{ height: stageH }}>

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
