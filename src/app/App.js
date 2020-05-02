import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { GlobalStyle, theme } from './theme/Theme'
import { ThemeProvider } from 'styled-components'

// Components
import Dashboard from './dashboard/Dashboard'
import WorkspacePage from './workspace/WorkspaceContainer'
import LoginPage from './login/LoginPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
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

export default App
