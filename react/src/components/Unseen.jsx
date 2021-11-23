import React from 'react'
import clsx from 'clsx'
import moment from 'moment'
import { useSelector } from 'react-redux' 
import { 
  Avatar,
  makeStyles,
  Button,
  IconButton,
  CardHeader,
  CardContent,
  CardActions,
  Paper,
  Typography,
} from '@material-ui/core'
import { 
  deleteMessage,
  setSeen,
  reply,
} from '../redux/person/actions'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({ 
  panel: {
    background: 'rgba(0,0,0, 0.35)',
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

export default function Unseen( props ) {

  const classes = useStyles()
  const { sizes } = props
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
  const { colorText } = settings
  const { stageW } = sizes
  let latestUnseenMessage = null
  let messageIndex = 0
  if ( messages ){
    for ( let i = 0; i < messages.length; i++ ){
      if ( !messages[ i ].seen ){
        latestUnseenMessage = messages[ i ]
        messageIndex = i
        break
      }
    }
  }
  // if ( !latestUnseenMessage ) return null
  const { 
    time,
    message,
    origin,
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

  return  <Paper 
            style={{ width: stageW - 32 }}
            variant={ `outlined` }
            square={ false } 
            className={ clsx( classes.panel )}>
             
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

                   { origin !== `admin` ? <IconButton
                     onClick={( e ) => {
                       e.preventDefault()
                       deleteMessage ( messageIndex )
                     }}>
                     <Icon icon={ `delete` } />
                   </IconButton> : null }
                 
              </CardActions>
              
          </Paper>
  }

 /*
 <pre>{ JSON.stringify( messages, null, 2 ) }</pre>
 */
