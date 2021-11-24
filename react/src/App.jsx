import React from 'react'
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

  let colorTheme = '#065842'
  let colorBg = '#065842'

  let thisTheme = {
    ...theme,
    palette:{
      background: {
        default: '#065842',
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
