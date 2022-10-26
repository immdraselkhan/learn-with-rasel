import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import './index.css'
// import { ToastContainer } from 'react-toastify'
import ThemeContext from './contexts/ThemeContext'
import UserContext from './contexts/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <UserContext>
        <RouterProvider router={router} />
        {/* <ToastContainer /> */}
      </UserContext>
    </ThemeContext>
  </React.StrictMode>
);