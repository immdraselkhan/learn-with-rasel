import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/Home'
import Error from '../components/Error'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Register from '../components/Register'
import PrivateRoute from './PrivateRoute'
import Courses from '../components/Courses'
import Course from '../components/Course'
import PremiumAccess from '../components/PremiumAccess'
import Blog from '../components/Blog'

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
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/course/:courseSlug',
        element: <Course />,
        loader: ({params}) => fetch(`https://api-learnwithrasel.vercel.app/${params.courseSlug}`)
      },
      {
        path: '/checkout/:courseSlug',
        element: <PrivateRoute><PremiumAccess /></PrivateRoute>,
        loader: ({params}) => fetch(`https://api-learnwithrasel.vercel.app/checkout/${params.courseSlug}`)
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/faq',
        element: <Blog />
      }
    ],
  },
]);