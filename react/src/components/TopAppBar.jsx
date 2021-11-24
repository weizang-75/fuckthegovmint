import React from 'react'
import clsx from 'clsx'
import { 
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { setScreen } from '../redux/stage/actions'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  appBar:{
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
}))

export default function MenuAppBar() {

  const classes = useStyles()

  return <AppBar position={ `static` } className={ clsx( classes.appBar )} >
          <Toolbar>
            <Typography variant={ `h6` } style={{ color: 'white' }}>
              #fuckthegovmint
            </Typography>
            <div className={ clsx( classes.grow )} />
            <IconButton
              color={ `inherit` }
              onClick={ ( e ) => {
                e.preventDefault()
                setScreen( `messages` )
              }}>
                <Icon icon={ `account` } />
            </IconButton>
        </Toolbar>
      </AppBar>
}
