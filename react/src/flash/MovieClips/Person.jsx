import React from 'react'
import clsx from 'clsx'
import { 
  makeStyles,
  Avatar,
  CardHeader,
  Typography,
} from '@material-ui/core'
import { useSelector } from 'react-redux' 
// import { 
//     updateFirestore,
// } from '../redux/person/actions'
// import { toggleOpen } from '../redux/app/actions'


const useStyles = makeStyles((theme) => ({
  person: {
    // border: '1px solid red',
  },
}))

export default function Person() {
  const classes = useStyles()
  const personSlice = useSelector( state => state.person )
  const { person } = personSlice
  const settingsSlice = useSelector( state => state.settings )
  const { settings } = settingsSlice
  let colorText= `#000`
  if ( settings ){
    colorText = settings.colorText
  }

  const {
    name,
    geo,
    userAgent,
  } = person
  let hiText = `Hi ${ name }`
  let device = `Device`
  let countryName = `Country`
  let countryCode = `countryCode`
  if ( geo ){
    countryName = geo.countryName
    countryCode = geo.countryCode
  }
  if ( userAgent ){
    device = userAgent.device
  }
  let locationText = `${ device } in ${ countryName }`
  const flag = `https://listingslab.com/public/svg/flags/${ countryCode.toLowerCase() }.svg`

  return <div className={ clsx( classes.person )}>
            <CardHeader 
                  disableTypography
                  title={ <Typography variant={ `body1` } style={{
                            color: colorText,
                          }} >
                          { hiText }
                          </Typography> }
                  subheader={ <Typography variant={ `body2` } style={{
                                color: colorText,
                              }} >
                              { locationText }
                              </Typography> }
                  avatar={ <React.Fragment>
                              <Avatar 
                                src={ flag }
                              />
                           </React.Fragment> }
                />
          </div>
}
