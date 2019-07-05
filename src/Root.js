import React from 'react'
import { Provider } from 'react-redux'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import teal from '@material-ui/core/colors/teal'
import App from './App'
import { initStore } from './store'

const store = initStore()

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  )
}

export default Root
