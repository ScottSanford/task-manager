import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

// Components
import Header from './components/common/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Workspace from './components/workspace/Workspace'

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
