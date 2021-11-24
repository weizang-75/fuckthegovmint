import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  Grid,
  // Typography,
} from '@material-ui/core'
// import { Icon } from '../theme'
// import { setScreen } from '../redux/stage/actions'

const useStyles = makeStyles((theme) => ({ 
  panel: {
    borderRadius: theme.spacing(),
  },
  messageBtn:{
    margin: theme.spacing(),
  },
  person:{
    marginTop: theme.spacing(2),
    height: 100,
    width: 100,
  },
  messagesBtn:{
    marginTop: theme.spacing(),
  },
  grow:{
    flexGrow: 1,
  },
  name:{
    // margin: theme.spacing(),
    textAlign: 'center',
  },
  btnTxt:{ 
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  btn: {
    margin: theme.spacing(),
  },
}))

export default function MainMenu() {

  const classes = useStyles()

  let colorTheme = `red`

  return  <div className={ clsx( classes.panel )}
            style={{ background: colorTheme }}>

            <Grid container>
              <Grid item className={ clsx( classes.grow )} />
              <Grid item>
                MainMenu
              </Grid>
              <Grid item  className={ clsx( classes.grow )} />
            </Grid>

             <div style={{ height: 8 }} />
          </div>
}
