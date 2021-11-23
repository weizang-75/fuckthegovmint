import React from 'react'
// import clsx from 'clsx'
import { useSelector } from 'react-redux'
// import { closeFeedback } from '../redux/app/actions'
// import { 
//   makeStyles,
//   IconButton,
//   Snackbar,
//   SnackbarContent,
// } from '@material-ui/core'
// import { Icon } from '../theme'

// const useStyles = makeStyles((theme) => ({ 
//   feedbackContent: {
//     background: 'none',
//     boxShadow: 'none',
//     color: 'white',
//   },
//   pushW: {
//     // minWidth: 280,
//   },
//   warning: {
//     // background: theme.palette.info.main,
//   },
//   titleTxt: {
//     paddingTop: theme.spacing(0.25),
//   },
// }))

export default function Feedback() {

  const appSlice = useSelector(state => state.app)
  const { feedback } = appSlice
  if ( feedback ){
    console.log ( 'feedback', feedback)
  }

  // const classes = useStyles()
  // const settingsSlice = useSelector(state => state.settings)
  // const { settings } = settingsSlice
  // const [open, setOpen] = React.useState( feedback ? true : true)
  // if ( !feedback || !settings ) return null 
  // let timeoutAfter = 10000
  // if ( feedback.noTimeout ){
  //   timeoutAfter = 10000000
  // }
  // const onFinished = (event, reason) => {
  //   if (reason === 'clickaway') return
  //   setOpen( false )
  //   setTimeout(() => {
  //     closeFeedback()
  //   }, 500)
  // }
  return <React.Fragment></React.Fragment>
}

/*
<Snackbar 
            open={ open }
            color={ `primary` }
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            onClose={ onFinished }
            autoHideDuration={ timeoutAfter } >
            <SnackbarContent 
              className={ clsx(classes.feedbackContent, classes.warning) }
              message={ feedback.message.toString() }
              action={ !feedback.noTimeout ? <IconButton onClick={ closeFeedback }>
                          <Icon icon={ `close` } />
                        </IconButton> : null }>
            </SnackbarContent>           
          </Snackbar>
*/