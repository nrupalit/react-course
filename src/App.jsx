import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/login"
import Home from "./components/Home"

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/dashboard', element: <Home /> }
])
export default function App() {
  return (<RouterProvider router={router}></RouterProvider>
  )
};
