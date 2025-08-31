import React from 'react'
import Applayout from './components/layouts/Applayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home'
import Notes from './components/pages/Notes'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Anote from './components/pages/Anote'
import Logout from './components/pages/Logout'
import Features from './components/pages/Features'
import SupportPage from './components/pages/SupportPage'
import Adminlayout from './components/layouts/Adminlayout'
import AdminUpload from './components/pages/AdminUpload'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"Notes",
        element:<Notes/>
      },
      {
        path:"Login",
        element:<Login/>
      },
      {
        path:"Signup",
        element:<Signup/>
      },
      {
        path:"Anote",
        element:<Anote/>
      },
      {
        path:"Logout",
        element:<Logout/>
      },
      {
        path:"Features",
        element:<Features/>
      },
      {
        path:"SupportPage",
        element:<SupportPage/>
      },
   
    ]
  },
  {
    path: "Adminlayout",
    element: <Adminlayout />,
    children: [
  {
    path:'AdminUpload',
    element:<AdminUpload/>
  },
      
   
    ]
  },
 
])

function App() {

  return  <RouterProvider router={router}></RouterProvider>
  
}

export default App
