import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'
import { initializeApiBaseUrl } from './api/baseUrl.js'

initializeApiBaseUrl().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </StrictMode>,
  );
})
