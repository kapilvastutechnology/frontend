import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import { SignUp } from "./Pages/signup/SignUp"
import { Login } from "./Pages/login/Login"
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
       {
        path: 'signup',
        element: <SignUp/>
       },
        {
          path: 'login',
          element: <Login/>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}