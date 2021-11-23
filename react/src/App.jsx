import React from 'react'
import { useSelector } from 'react-redux'
import {
  createTheme,
  MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core/'
import { theme } from './theme'
import {
    Flash,
} from './components'

export default function App() {

  const settingsSlice = useSelector( state => state.settings )
  const {
    settings,
  } = settingsSlice

  let colorTheme = '#DDDDDD'
  let colorBg = '#FFFFFF'

  if ( settings ) {
    colorTheme = settings.colorTheme
    colorBg = settings.colorBg
  }
  let thisTheme = {
    ...theme,
    palette:{
      background: {
        default: 'none',
        paper: colorBg,
        main: colorBg,
      },
      primary: {
        main: colorTheme,
      },
      secondary: {
        main: colorBg,
      },
    }
  }
  const compiledTheme = createTheme( thisTheme )

  return <MuiThemeProvider theme={ compiledTheme }>
              <CssBaseline />
              <Flash />
          </MuiThemeProvider>
}
