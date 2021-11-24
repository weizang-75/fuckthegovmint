import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import { 
  makeStyles,
  AppBar,
  Toolbar,
  Avatar,
} from '@material-ui/core'
// import { Icon } from '../theme'
import { toggleOpen } from '../redux/app/actions'
import { 
  mainmenuAS,
} from '../flash/ActionScript'

const useStyles = makeStyles((theme) => ({
  bottombar: {
    zIndex: 2147483646,
  },
  white:{
    background: 'white',
  },
  avatarBtn:{
    // border: '1px solid red',
    zIndex: 20,
    cursor: 'pointer',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  },
  messageIcon:{
    position: 'absolute',
    zIndex: 2,
    top: theme.spacing(),
    right: theme.spacing(1.5),
  },
  btn: {
    position: 'absolute',
    zIndex: 1,
    top: theme.spacing(),
    right: theme.spacing(),
  },
  iconBtn:{
    background: theme.palette.background.paper +' !important',
  },
  grow: {
    flexGrow: 1,
  },
}))

export default function BottomFab() {
  
  const classes = useStyles()
  const appSlice = useSelector( state => state.app )
  const { open } = appSlice

  if (open) return null
  
  return <AppBar position={ `fixed` } className={ clsx( classes.appBar, classes.bottombar )}>
            <Toolbar>           
                  <Avatar 
                    className={ clsx( classes.avatarBtn, classes.btn )}
                    src={ `icon` }
                    onClick={(e) => {
                               e.preventDefault()
                               toggleOpen ( !open )
                               setTimeout(() => {  mainmenuAS( `onResize` ) },   50)
                            }}/> 
            </Toolbar>
          </AppBar>
}
