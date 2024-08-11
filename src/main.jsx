import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './styles/global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/users.jsx';
import BookPage from './pages/book.jsx';
import TodoApp from './components/todo/todoapp.jsx';
import ErrorPage from './components/todo/error.jsx';
import { AuthWarrper } from './components/context/auth.context.jsx';
import PrivateRoute from './pages/private.route.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,

      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/book",
        element: (
        <PrivateRoute>
        <BookPage />
        </PrivateRoute>) ,
      }

    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthWarrper>


      <RouterProvider router={router} />
    </AuthWarrper>
  </React.StrictMode>,
)
