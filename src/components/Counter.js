import { useDispatch, useSelector } from "react-redux";
import { COUNTER } from '../constants/counter';
import classes from './Counter.module.css';
import { counterAction } from "../store/dispatch-action";

const Counter = () => {
  const dispatch = useDispatch();
  const isHideCounter = useSelector(state => state.counter.isHideCounter)
  const counter = useSelector(state => state.counter.counter);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toogle_counter())
  };
  const dispatchAction = (action) => {
    if (counter === 0  && action === COUNTER.DECREMENT) {
      return;
    }
    if (action === COUNTER.INCREASE) {
      dispatch(counterAction.increase(5));
      return;
    }
    if (action === COUNTER.INCREMENT) {
      dispatch(counterAction.increment())
    } else {
      dispatch(counterAction.decrement())
    }
    // dispatch({type: action})
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
