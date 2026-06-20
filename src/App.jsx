import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Store from './pages/Store'
import Dynmic from './pages/Dynmic'
import Contact from "./pages/Contact";
import About from './pages/About'

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
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path:"/contact",
        element :<Contact/>
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
