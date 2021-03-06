import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './app/store'
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore()

store.subscribe(() => {
  const appTheme = store.getState().appTheme
  if (!appTheme) return

  localStorage.setItem('appTheme', appTheme)
})
console.log('STORE::', store)

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
