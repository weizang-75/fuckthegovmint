import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { getLocaleFlag } from '../lib'
import { 
  setUserLocale,
  setTitle,
} from '../redux/app/actions'
import {
    withStyles,
    makeStyles,
    Avatar,
    Menu,
    MenuItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'

const StyledMenu = withStyles({
  paper: {
    backgroundColor: `white`,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(5),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    '&:focus': {
      backgroundColor: theme.palette.common.white,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        // color: theme.palette.primary.white,
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        // color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)


const useStyles = makeStyles(theme => ({
  switchLocale: {

  },
  trigger:{
    cursor: 'pointer',
  },
  margin10:{
    margin: 10,
  },
}))



export default function SwitchLocale() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    userLocale,
  } = appSlice

  const localeMenu = [
  {
    code: `en`,
    label: `English`,
    localLabel: `English`,
    flag: getLocaleFlag( `en` ),
    onClick: (e) => {
      e.preventDefault()
      onLocaleSelect( `en` )
      setTitle( `Welcome` )
    },
  },
  {
    code: `nl`,
    localLabel: `Nederlands`,
    label: `Dutch`,
    flag: getLocaleFlag( `nl` ),
    onClick: (e) => {
      e.preventDefault()
      onLocaleSelect( `nl` )
      setTitle( `Welkom` )
    },
  },
  {
    code: `fr`,
    localLabel: `Français`,
    label: `French`,
    flag: getLocaleFlag( `fr` ),
    onClick: (e) => {
      e.preventDefault()
      onLocaleSelect( `fr` )
      setTitle( `Bienvenue` )
    },
  },
  {
    code: `es`,
    localLabel: `Español`,
    label: `Spanish`,
    flag: getLocaleFlag( `es` ),
    onClick: (e) => {
      e.preventDefault()
      onLocaleSelect( `es` )
      setTitle( `Bienvenida` )
    },
  },
  {
    code: `de`,
    localLabel: `Deutsch`,
    label: `German`,
    flag: getLocaleFlag( `de` ),
    onClick: (e) => {
      e.preventDefault()
      onLocaleSelect( `de` )
      setTitle( `Willkommen` )
    },
  },
  {
    code: `cn`,
    localLabel: `简体中文`,
    label: `Simplified Chinese`,
    flag: getLocaleFlag( `cn` ),
    onClick: (e) => {
      e.preventDefault()
      onLocaleSelect( `cn` )
      setTitle( `欢迎` )
    },
  }
]



  const onLocaleSelect = locale => {
    setAnchorEl( null )
    setUserLocale( locale )
    // console.log ('onLocaleSelect', locale)
  }



  const [anchorEl, setAnchorEl] = React.useState(null)
  
  const handleTap = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return <React.Fragment>
    
      <Avatar 
        className={ clsx( classes.trigger, classes.margin10 ) }
        src={ getLocaleFlag( userLocale ) } 
        onClick={ handleTap }
      />
    
      <StyledMenu
        id={ `locale-menu` }
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean(anchorEl) }
        onClose={ handleClose }>

        { localeMenu.map( (item, i) => {
            const {
              // label,
              flag,
              localLabel,
              onClick,
            } = item
            return <StyledMenuItem
                      key={`menu_${i}`}
                      onClick={ onClick }>
                      <React.Fragment>
                        <ListItemIcon>
                          <Avatar src={ flag } />
                        </ListItemIcon>
                        <ListItemText 
                          primary={ localLabel }
                        />
                      </React.Fragment>
                    </StyledMenuItem>
        })}

      </StyledMenu>
    </React.Fragment>
  }


/*
{ JSON.stringify( userLocale, null, 2) }
*/