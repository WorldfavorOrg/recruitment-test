import React from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import teal from '@material-ui/core/colors/teal'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#34495E',
    },
    secondary: {
      main: teal['700'],
    },
  },
})

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default Root
