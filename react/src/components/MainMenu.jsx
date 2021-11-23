import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  makeStyles,
  Avatar,
  Button,
  Grid,
  Typography,
} from '@material-ui/core'
import { Icon } from '../theme'
import { setScreen } from '../redux/stage/actions'

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
  const personSlice = useSelector( state => state.person )
  const settingsSlice = useSelector( state => state.settings )
  const { person } = personSlice
  const { settings } = settingsSlice
  const {
    name,
    avatar,
    messages,
  } = person
  const admin = settings.name
  const {
    colorText,
    colorTheme,
  } = settings

  let hasMessages = false
  if (messages) {
    if (messages.length) hasMessages = true
  }

  return  <div className={ clsx( classes.panel )}
            style={{ background: colorTheme }}>

            <Grid container>
              <Grid item className={ clsx( classes.grow )} />
              <Grid item>
                <Avatar src={ avatar } className={ clsx( classes.person )}/>
              </Grid>
              <Grid item  className={ clsx( classes.grow )} />
            </Grid>

            <Typography 
              variant={ `h6` }
              className={ clsx( classes.name )}
              style={{ color: colorText, padding: 16 }}>
              Hey { name } we are { admin }
            </Typography>

            { hasMessages ? <div className={ clsx( classes.messageBtn )} >

              <Grid container>
                <Grid item className={ clsx( classes.grow )} />
                <Grid item>
                  <Button                                 
                    variant={ `contained` }
                    color={ `secondary` }
                    onClick={( e ) => {
                       e.preventDefault()
                       setScreen( `messages` )
                     }}>
                     <Icon icon={ `messages` } />
                     <span className={ clsx( classes.btnTxt )}>
                       You have { messages.length } message{ messages.length > 1 ? `s` : `` }
                     </span>
                  </Button>
                </Grid>
                <Grid item  className={ clsx( classes.grow )} />
              </Grid>
            
            </div> : null }

             <div style={{ height: 8 }} />
          </div>
}
