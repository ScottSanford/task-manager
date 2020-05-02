import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { GlobalStyle, lightTheme, darkTheme } from './theme/Theme'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'


// Components
import Dashboard from './dashboard/Dashboard'
import WorkspacePage from './workspace/WorkspaceContainer'
import LoginPage from './login/LoginPage'

function App({ theme }) {
  console.log('theme', theme)
  const localTheme = window.localStorage.getItem('theme')
  const isLightTheme = (localTheme && localTheme === 'light') || theme === 'light'

  return (
    <ThemeProvider theme={localTheme && localTheme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/workspace/:projectId" component={WorkspacePage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}

function mapStateToProps(state) {
  return {
    theme: state.theme,
  }
}

const actionCreators = {}

export default connect(mapStateToProps, actionCreators)(App)
