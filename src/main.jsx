import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";

 const router = createBrowserRouter([
  {
  path: "/",
  element:  <App />,
  },
  {
    path: "/login",
    element:  <div>login</div>,
  },
  {
    path: "/register",
    element:  <div>register</div>,
  },
  {
    path: "/users",
    element:  <div>users</div>,
  },
  {
    path: "/products",
    element:  <div>products</div>,
  },
  
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
