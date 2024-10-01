import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import DashboardCalendar from './components/DashboardCalender'
import { eventAction } from './redux/actions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events'));
    if (events) {
      dispatch(eventAction.addLocalStorageEvents(events))
    }
  })
  return (
    <DashboardCalendar />
  )
}

export default App
