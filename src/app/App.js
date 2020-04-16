import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Components
import Header from './common/header/Header'
import Dashboard from './dashboard/Dashboard'
import Workspace from './workspace/WorkspaceContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Workspace} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  )
}

export default App
