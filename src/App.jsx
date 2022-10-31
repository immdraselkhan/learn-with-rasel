import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { ToastContainer } from 'react-toastify'
import ThemeContext from './contexts/ThemeContext'
import UserContext from './contexts/UserContext'
import DataContext from './contexts/DataContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <UserContext>
        <DataContext>
          <RouterProvider router={router} />
          <ToastContainer />
        </DataContext>
      </UserContext>
    </ThemeContext>
  </React.StrictMode>
);