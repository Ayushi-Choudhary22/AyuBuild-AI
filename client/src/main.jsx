//entry point of website
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
 //Provider gives Redux access to the whole app.
 <Provider store={store}>
   <App />
 </Provider>
  
)
