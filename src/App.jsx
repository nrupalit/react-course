import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { eventAction } from './redux/actions'
import DashboardCalendar from './components/DashboardCalender'
import ErrorPage from './components/errorPage'
import RootLayout from './components/RootLayout'
import Auth from './components/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/login', element: <Auth />, },
      { path: '/', element: <DashboardCalendar /> }
    ],
    errorElement: <ErrorPage />
  }
]);

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events'));
    if (events) {
      dispatch(eventAction.addLocalStorageEvents(events))
    }
  })
  return <RouterProvider router={router} />
}

export default App
