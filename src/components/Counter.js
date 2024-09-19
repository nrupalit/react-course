import { COUNTER, TOOGLE_COUNTER } from '../constants/counter';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const isHideCounter = useSelector(state => state.isHideCounter)
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => {
    dispatch({type: TOOGLE_COUNTER})
  };
  const dispatchAction = (action) => {
    if (counter === 0  && action === COUNTER.DECREMENT) {
      return;
    }
    if (action === COUNTER.INCREASE) {
      dispatch({type: action, counter: 5});
      return;
    }
    dispatch({type: action})
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!isHideCounter && <div className={classes.value}>{counter}</div>}
      {isHideCounter && <div>Counter hidden</div>}
      <>
        <button onClick={() => dispatchAction(COUNTER.INCREMENT)}>Increment</button>
        <button onClick={() => dispatchAction(COUNTER.DECREMENT)}>Decrement</button>
        <button onClick={() => dispatchAction(COUNTER.INCREASE)}>Increase by 5</button>
      </>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
