import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux' 
import {
  makeStyles,
  Button,
} from '@material-ui/core'
// import {
//   mainmenuAS,
// } from '../flash/ActionScript/'
import { setScreen } from '../redux/stage/actions'
// import CustomizedInputs from './CustomizedInputs'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({ 
  panel: {
    // background: 'rgba(0,0,0, 0.35)',
  },
  btn:{
    margin: theme.spacing( 0.5 ),
  },
  btnTxt:{ 
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
}))

export default function DevTools() {

  const classes = useStyles()
 
  return  <div className={ clsx( classes.panel )}>
             <Button
               className={ clsx( classes.btn )}
               variant={ `outlined` }
               color={ `primary` }
               onClick={( e ) => {
                 e.preventDefault()
                 setScreen( `mainmenu` )
               }}>
               <Icon icon={ `home` } />
               <span className={ clsx( classes.btnTxt )}>
                 Home
               </span>
             </Button>
          </div>
}

/*



             <Button
               className={ clsx( classes.btn )}
               variant={ `outlined` }
               color={ `primary` }
               onClick={( e ) => {
                 e.preventDefault()
                 setScreen( `messages` )
               }}>
               <Icon icon={ `messages` } />
               <span className={ clsx( classes.btnTxt )}>
                 Messages
               </span>
             </Button>

             <Button
               className={ clsx( classes.btn )}
               variant={ `outlined` }
               color={ `primary` }
               onClick={( e ) => {
                 e.preventDefault()
                 setScreen( `newmessage` )
               }}>
               <Icon icon={ `send` } />
               <span className={ clsx( classes.btnTxt )}>
                 New message
               </span>
             </Button>

             
*/