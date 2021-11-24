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

  let colorTheme = '#000'
  let colorBg = 'rgba(255,255,255,0.5)'

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
