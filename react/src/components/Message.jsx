import React from 'react'
import clsx from 'clsx'
import moment from 'moment'
import { useSelector } from 'react-redux' 
import { 
  Avatar,
  makeStyles,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core'
import { 
  setSeen,
  reply,
} from '../redux/person/actions'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({ 
  panel: {
    borderRadius: theme.spacing(),
  },
  grow:{
    flexGrow: 1,
  },
  btnTxt:{ 
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  actionBtn: {
    margin: theme.spacing( 1 ),
  },
}))

export default function Message( props ) {

  const classes = useStyles()
  const personSlice = useSelector( state => state.person )
  const settingsSlice = useSelector( state => state.settings )
  const { 
    person,
  } = personSlice
  const { settings } = settingsSlice
  const { 
    messages,
  } = person
  const { 
    icon,
    name,
  } = settings
  const {
    colorText,
    colorTheme,
  } = settings
  // const { stageW } = sizes
  let latestUnseenMessage = {
    time: 0,
    message: `Lorem Isum solar immet. Lorem Isum solar immet. Lorem Isum solar immet.`,
    origin: `app`,
  }
  let messageIndex = 0

  const { 
    time,
    message,
  } = latestUnseenMessage

  const onTickClick = ( messageIndex ) => {
    let newMessages = []
    for( let i = 0; i < messages.length; i ++ ){ 
        if ( i === messageIndex ) { 
          newMessages.push ({ ...messages[i], seen: true, })
        } else {
          newMessages.push( messages[i] )
        }
    }
    setSeen( newMessages )
    return true
  }

  return  <div 
            className={ clsx( classes.panel )}
            style={{ 
              background: colorTheme,
            }}>
             
             <CardHeader 
               disableTypography
               avatar={ <Avatar  src={ icon } /> }
               title={ <Typography variant={ `body1` } style={{ color: colorText }}>
                         { name }
                       </Typography> }
               subheader={ <Typography variant={ `body2` } style={{ color: colorText }}>
                             { moment(time).fromNow() }
                           </Typography> } />

              <CardContent>
                 <Typography variant={ `h6` } style={{ color: colorText }}>
                   { message }
                 </Typography>
              </CardContent>
              
              <CardActions>
                  <div className={ clsx( classes.grow )} />
             
                    <Button
                     variant={ `contained` }
                     color={ `secondary` }
                     onClick={( e ) => {
                       e.preventDefault()
                       reply( messageIndex )
                     }}>
                     <Icon icon={ `reply` } />
                     <span className={ clsx( classes.btnTxt )}>
                       Reply
                     </span>
                   </Button>

                   <Button
                     variant={ `contained` }
                     color={ `secondary` }
                     onClick={( e ) => {
                       e.preventDefault()
                       onTickClick( messageIndex )
                     }}>
                     <span className={ clsx( classes.btnTxt )}>
                       Close
                     </span>
                     <Icon icon={ `tick` } />
                   </Button>

                   
                 
              </CardActions>
              
          </div>
  }

 /*
 <pre>{ JSON.stringify( messages, null, 2 ) }</pre>

 { origin !== `admin` ? <IconButton
                     onClick={( e ) => {
                       e.preventDefault()
                       deleteMessage ( messageIndex )
                     }}>
                     <Icon icon={ `delete` } />
                   </IconButton> : null }


 */
