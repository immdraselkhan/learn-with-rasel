import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/Home'
import Error from '../components/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ],
  },
]);