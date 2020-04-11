import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

// Components
import Workspace from './components/workspace/Workspace'
import Dashboard from './components/dashboard/Dashboard'

// Components
import Header from './components/common/header/Header'

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
