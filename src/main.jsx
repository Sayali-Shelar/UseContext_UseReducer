import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoresProvider } from './context/StoresContext.jsx'

createRoot(document.getElementById('root')).render(
  <StoresProvider>
    <App />
  </StoresProvider>
    
  
)
