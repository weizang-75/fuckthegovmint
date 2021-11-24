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
  let colorTheme = `yellow`

  return  <div 
            className={ clsx( classes.panel )}
            style={{ background: colorTheme }}>

             Messages
             <div style={{ height: 8 }} />
          </div>
}
