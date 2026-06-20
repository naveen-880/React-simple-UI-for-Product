import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Store from './pages/Store'
import Dynmic from './pages/Dynmic'

export default function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/",
        element: <Home />
      },
      {
        path: "/Store/:slug?",
        element: <Store />
      },
      {
        path: "dynamic-page/:id",
        element: <Dynmic />
      }
      ]
    },

  ])
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  )
}
