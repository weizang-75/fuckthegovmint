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
  Typography,
} from '@material-ui/core'
import { 
  omicronAS,
  getSizes,
} from './ActionScript'
// import {
//   SwitchLocale,
// } from '../components'

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
    fontWeight: 'lighter',
  },
  yellow:{
    color: '#f1fd37',
    fontWeight: 'lighter',
  },
  centerise:{
    margin: theme.spacing( 2.5 ),
    textAlign: 'center',
  },
}))

export default function Omnicron() {
  
  const classes = useStyles()
  const stageSlice = useSelector( state => state.stage )
 
  React.useEffect(() => {
    const {
      stageReady,
    } = stageSlice
    if ( !stageReady ) {
      setTimeout(() => { omicronAS( `setup` ) }, 10)
      setTimeout(() => { omicronAS( `toMoronic` ) }, 1000)
    }
  }, [ stageSlice ])

  const sizes = getSizes()
  const {
    stageH,
    appBgW,
    appBgH,
  } = sizes

  // let appBg = `https://listingslab.com/public/png/appBg/target.png`
  let appBg = null
  
  return  <div className={ clsx( classes.stage ) }
            style={{ height: stageH }}>

              <div id={ `question` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 800, opacity: 0,
                }}>
                <Typography variant={ `h4`} className={ clsx( classes.yellow, classes.centerise ) }>
                  who is calling whom a moron?
                </Typography>
              </div>

              <div id={ `omnicron_6` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 700, opacity: 0,
                }}>
                <Typography variant={ `h1`} className={ clsx( classes.white ) }>
                  n
                </Typography>
              </div>

              <div id={ `omnicron_5` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 600, opacity: 0,
                }}>
                <Typography variant={ `h1`} className={ clsx( classes.white ) }>
                  o
                </Typography>
              </div>

              <div id={ `omnicron_4` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 500, opacity: 0,
                }}>
                <Typography variant={ `h1`} className={ clsx( classes.white ) }>
                  r
                </Typography>
              </div>

              <div id={ `omnicron_3` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 400, opacity: 0,
                }}>
                <Typography variant={ `h1`} className={ clsx( classes.white ) }>
                  c
                </Typography>
              </div> 

              <div id={ `omnicron_2` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 300, opacity: 0,
                }}>
                <Typography variant={ `h1`} className={ clsx( classes.white ) }>
                  i
                </Typography>
              </div> 

              <div id={ `omnicron_1` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 200, opacity: 0,
                }}>
                <Typography variant={ `h1`} className={ clsx( classes.white ) }>
                  m
                </Typography>
              </div> 

              <div id={ `omnicron_0` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 100, opacity: 0,
                }}>
                <Typography variant={ `h1`} className={ clsx( classes.white ) }>
                  o
                </Typography>
              </div> 

              <div id={ `appBg` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 1,
                  width: appBgW, height: appBgH,
                }}>
                { appBg ? <img 
                  style={{ width: '100%', height: '100%' }}
                  src={ appBg } 
                  alt={ `App Background` }/> : null }
             </div>  

           </div>
  }






/*

<div id={ `locale` } 
  className={ clsx( classes.movieClip ) }
  style={{ 
    zIndex: 2200, opacity: 1,
  }}>
  <SwitchLocale />
</div> 

*/