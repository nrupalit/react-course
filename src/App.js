import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Header from './components/Header';


function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated ? <Dashboard /> : <> <Header/> <Auth /></>}
    </>
  );
}

export default App;
