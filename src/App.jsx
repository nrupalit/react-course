import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Auth from './components/Auth'
import DashboardCalendar from './components/DashboardCalender'
import ErrorPage from './components/errorPage'
import RootLayout from './components/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Auth /> },
      { path: '/dashboard', element: <DashboardCalendar /> }
    ],
    errorElement: <ErrorPage />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
