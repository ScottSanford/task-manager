import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Components
import Dashboard from './dashboard/Dashboard'
import WorkspacePage from './workspace/WorkspaceContainer'
import LoginPage from './login/LoginPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/workspace/:projectId" component={WorkspacePage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  )
}

export default App
