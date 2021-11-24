import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({ 
  panel: {
  },
  white:{
    color: 'white',
  },
  niceGraphic:{
    textAlign: 'right',
  },
  spin:{
    width: 100,
    height: 100,
  },
}))

export default function MainMenu() {

  const classes = useStyles()

  return  <div className={ clsx( classes.panel )} >

              <Typography 
                gutterBottom
                className={ clsx( classes.white )}
                variant={ `h5` }>
                I don't want to disclose my health status, but I wish to support your business.
              </Typography>

              <Typography 
                className={ clsx( classes.white )}
                variant={ `h5` }>
                If that works for you simply say "Thank You".
              </Typography>
              
          </div>
}
