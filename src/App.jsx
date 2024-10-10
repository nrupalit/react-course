import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Auth from './components/Auth'
import DashboardCalendar from './components/DashboardCalender'
import ErrorPage from './components/errorPage'
import RootLayout from './components/RootLayout'
import PrivateRoute from './components/PrivateRoute'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Auth /> },
      {
        path: '/dashboard', element: <PrivateRoute component={<DashboardCalendar />} />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
