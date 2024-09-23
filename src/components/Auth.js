import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authAction } from '../store/dispatch-action';

const Auth = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authAction.login())
  }
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <h1>{isAuthenticated}</h1>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
        
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
