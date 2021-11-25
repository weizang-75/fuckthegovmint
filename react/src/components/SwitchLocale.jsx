import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { switchLocale } from '../redux/app/actions'
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
    locales,
    locale,
  } = appSlice
  const [ anchorEl, setAnchorEl ] = React.useState(null)
  
  const handleTap = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return <React.Fragment>
    
      <Avatar 
        className={ clsx( classes.trigger, classes.margin10 ) }
        src={ `https://listingslab.com/public/svg/flags/${ locale }.svg` } 
        onClick={ handleTap }
      />
    
      <StyledMenu
        id={ `locale-menu` }
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean(anchorEl) }
        onClose={ handleClose }>

        { locales.map( (item, i) => {
            const {
              code,
              flag,
              localLabel,
              label,
            } = item
            return <StyledMenuItem
                      key={`menu_${i}`}
                      onClick={ ( e ) => {
                        e.preventDefault()
                        switchLocale( code )
                        setAnchorEl( null )
                      }}>
                      <React.Fragment>
                        <ListItemIcon>
                          <Avatar src={ flag } />
                        </ListItemIcon>
                        <ListItemText 
                          primary={ localLabel }
                          secondary={ label }
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