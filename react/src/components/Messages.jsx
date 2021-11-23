import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
  makeStyles,
  Avatar,
  Button,
  List,
  Typography,
  CardHeader,
} from '@material-ui/core'
import { Icon } from '../theme'
import { setScreen } from '../redux/stage/actions'

const useStyles = makeStyles((theme) => ({ 
  panel: {
    borderRadius: theme.spacing(),
  },
  message:{
    borderBottom: '1px dashed ' + theme.palette.secondary.main,
  },
  action:{
    margin: theme.spacing( 1.5 ),
    marginTop: theme.spacing( 2 ),
  },
  name:{
    margin: theme.spacing(),
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

export default function Messages() {

  const classes = useStyles()
  const personSlice = useSelector( state => state.person )
  const settingsSlice = useSelector( state => state.settings )
  const { person } = personSlice
  const { settings } = settingsSlice
  const {
    avatar,
    messages,
  } = person
  if (!messages) return null
  const {
    icon,
    colorText,
    colorTheme,
    colorBg,
  } = settings

  return  <div 
            className={ clsx( classes.panel )}
            style={{ background: colorTheme }}>

             <List dense>
               { messages.length ? <React.Fragment>
                 { messages.map( ( item, i ) => {
                   const {
                     message,
                     origin,
                     time,
                   } = item
                   return <div key={ `message_${i}`} className={ clsx( classes.message )} >

                            <CardHeader 
                              disableTypography
                              action={ origin === `admin` ? 
                                <div className={ clsx( classes.action )}>
                                  <Avatar src={ icon }/> 
                                </div>
                                : null
                              }
                              avatar={ origin === `app` ? 
                                  <Avatar src={ avatar }/>
                                : null
                              }
                              title={ <Typography 
                                        variant={ `body1` }
                                        style={{ color: colorText }}>
                                          { message }
                                        </Typography> }
                              subheader={ <Typography 
                                            variant={ `body2` }
                                            style={{ color: colorBg }}>
                                            { `${ moment( time ).fromNow() }` }
                                          </Typography> }/>
                          </div>
                 }) }
               </React.Fragment> 
               : 
               <React.Fragment>
                  <Typography 
                    variant={ `body1` }
                    className={ clsx( classes.name )}
                    style={{ color: colorText, padding: 16 }}>
                      No messages yet
                    </Typography>
               </React.Fragment> }

             </List>


             <CardHeader 
                disableTypography
                action={ <div className={ clsx( classes.action )}>

                           <Button                                 
                            variant={ `contained` }
                            color={ `secondary` }
                            onClick={( e ) => {
                               e.preventDefault()
                               setScreen( `newmessage` )
                             }}>
                             <span className={ clsx( classes.btnTxt )}>
                               New message
                             </span>
                             <Icon icon={ `send` } />
                          </Button>
                          </div>
                        }
            />


             <div style={{ height: 8 }} />
          </div>
}

/*
<div className={ clsx( classes.action )}>
                                        { origin === `deleteable` ? <IconButton
                                            onClick={( e ) => {
                                               e.preventDefault()
                                               console.log( 'delete' )
                                             }}
                                          >
                                          <Icon icon={ `delete` } color={ `secondary` } />
                                        </IconButton> : null }
                                        
                                       </div>
*/