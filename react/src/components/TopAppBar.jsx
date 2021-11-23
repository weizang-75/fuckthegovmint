import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { 
  makeStyles,
  Badge,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { 
  toggleOpen,
  navigate,
} from '../redux/app/actions'
import { setScreen } from '../redux/stage/actions'
import { getUnseenMessages } from '../lib'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar:{
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
}))

export default function MenuAppBar() {

  const classes = useStyles()
  const personSlice = useSelector( state => state.person )
  const { person } = personSlice
  const { messages, name } = person

  const settingsSlice = useSelector( state => state.settings )
  const { settings } = settingsSlice
  const { url } = settings
  let adminUrl = `${ url }/wp-admin/admin.php?page=pingpong%2Fphp%2FPingpong.php`

  let unseenMessages = 0
  if ( messages ) unseenMessages = getUnseenMessages(messages).length

  const {
    colorText,
  } = settings

  return <AppBar position={ `static` } className={ clsx( classes.appBar )} >
          <Toolbar>
            <Typography variant={ `h6` } style={{ color: colorText }}>
              { name }
            </Typography>
            
            <div className={ clsx( classes.grow )} />

            <IconButton
              color={ `inherit` }
              onClick={ ( e ) => {
                e.preventDefault()
                setScreen( `messages` )
              }}>
              <Badge badgeContent={ unseenMessages } color={ `secondary` }>
                <Icon icon={ `messages` } />
              </Badge>
            </IconButton>
            
            <IconButton
              color={ `inherit` }
              onClick={ ( e ) => {
                e.preventDefault()
                navigate( adminUrl, `_blank` )
              }}>
              <Icon icon={ `plugin` } />
            </IconButton>

            <IconButton
              color={ `inherit` }
              onClick={ ( e ) => {
                e.preventDefault()
                toggleOpen ( false )
              }}>
              <Icon icon={ `close` } />
            </IconButton>

        </Toolbar>
      </AppBar>
}
