import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <GoogleOAuthProvider clientId="366726218069-c2lrtqe40h2ptag4n7vj0rqe52fhdr72.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>,
)
