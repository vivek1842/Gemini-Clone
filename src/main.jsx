import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// eslint-disable-next-line no-unused-vars
import ContextProvider from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  // Support of context provider in this application
  <ContextProvider>
    <App />
  </ContextProvider>,
)
