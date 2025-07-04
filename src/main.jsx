import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
               <App />
      </HashRouter>
  </StrictMode>,
)
