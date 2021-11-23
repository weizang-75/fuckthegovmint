import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
  makeStyles,
  Avatar,
  Typography,
  CardHeader,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core'
import { 
  setScreen,
} from '../redux/stage/actions'
import { 
  sendMessage,
} from '../redux/person/actions'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({ 
  panel: {
    borderRadius: theme.spacing(),
  },
  inputField:{
    padding: theme.spacing( 1.5 ),
    fontSize: 20,
    borderRadius: theme.spacing( 0.5 ),
    width: '100%',
  },
  padIcon:{
    marginRight: theme.spacing(),
  },
  action:{
    margin: theme.spacing( 1.5 ),
  },
  constrain:{
    margin: theme.spacing(),
  },
  grow:{
    flexGrow: 1,
  },
  btnTxt:{ 
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  btn: {
    margin: theme.spacing(),
  },
  actionBtn: {
    margin: theme.spacing( 1 ),
  },
}))



export default function NewMessage( props ) {

  const classes = useStyles()
  const [ value, setValue ] = React.useState( `` )
  const [ sendable, setSendable ] = React.useState( false )
  // const { sizes } = props
  const personSlice = useSelector( state => state.person )
  const settingsSlice = useSelector( state => state.settings )
  const { 
    person,
  } = personSlice
  const { settings } = settingsSlice
  const { 
    avatar,
  } = person
  const personName = person.name
  const {
    name,
    colorTheme,
    icon,
  } = settings
  const { colorText } = settings
  // const { stageW } = sizes

  React.useEffect(() => {
    // console.log ('effect')
  }, [])

  const updateNewMessage = ( v ) => {
    let send = true
    if (!v.length) send = false
    setSendable( send )
    setValue( v )
    return true
  }
 
  return  <div 
            className={ clsx( classes.panel )}
            style={{ background: colorTheme }}>
            <CardHeader 
              disableTypography
              avatar={ <Avatar src={ avatar } /> }
              action={ <div className={ clsx( classes.action )}>
                        <Avatar src={ icon } />
                       </div> }
              title={ <Typography 
                        variant={ `body1` }
                        style={{ color: colorText }}>
                          { personName } to { name }
                        </Typography>
              }
            />

            <CardContent>

              <div className={ clsx( classes.constrain )}>
                <textarea 
                  className={ clsx( classes.inputField )}
                  type={`text`} 
                  rows={ 4 }
                  onChange={ (e) => {
                    e.preventDefault()
                    // updateNewMessage(e.target.value)
                    // console.log ('updateNewMessage', e.target.value )
                    updateNewMessage(e.target.value)
                  }}>
                </textarea>
              </div>
              
              
              <CardActions>

                <div className={ clsx( classes.grow )} />


                <Button
                  variant={ `contained` }
                  color={ `secondary` }
                  onClick={( e ) => {
                     e.preventDefault()
                     setScreen( `mainmenu` )
                   }}>
                   <Icon icon={ `close` } />
                   <span className={ clsx( classes.btnTxt )}>
                     Cancel
                   </span>
                   
                </Button>

                <Button 

                  disabled={ !sendable }
                  variant={ sendable ? `contained` : `text` }
                  color={ `secondary` }
                  onClick={( e ) => {
                     e.preventDefault()
                     sendMessage( value )
                     setValue( `` )
                     setSendable( false )
                     setScreen( `messages` )
                   }}>
                   <span className={ clsx( classes.btnTxt )}>
                     Send
                   </span>
                   <Icon icon={ `send` } />
                </Button>

              </CardActions>
              
              
              <div style={{ height: 8 }} />


              </CardContent>
          </div>
  }

 /*
   <pre>{ JSON.stringify( messages, null, 2 ) }</pre>
            
            <div className={ clsx( classes.constrain )}>
                <ValidationTextField
                  fullWidth
                  value={ value }
                  variant={ `outlined` }
                  id={ `newmessage-input` }
                  onChange={ (e) => {
                    e.preventDefault()
                    updateNewMessage(e.target.value)
                  }}
                />
              </div>


const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      // color: 'black !important',
      // borderColor: 'white',
      borderWidth: 1,
      borderRadius: 4,
      // background: 'rgba(255,255,255, 0.25)',
    },
    '& input:invalid + fieldset': {
      // borderColor: 'red',
      // color: 'black !important',
      borderRadius: 4,
      borderWidth: 2,
      // background: 'white',
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      // color: 'black !important',
      borderRadius: 4,
      // background: 'white',
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);


 */
