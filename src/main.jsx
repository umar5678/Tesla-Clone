import React from 'react'
import {render} from 'react-dom'
import App from './App.jsx'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  container
)
