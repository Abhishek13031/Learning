import React from 'react'
import { createRoot } from 'react-dom/client' // Import createRoot specifically
import { Provider } from 'react-redux'        // Bridge between React and Redux
import { store } from './app/store'           // Your store configuration
import App from './App.jsx'
import './index.css'

// We use createRoot instead of the old ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)