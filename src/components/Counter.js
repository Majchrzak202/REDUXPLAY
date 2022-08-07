import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCounter } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(actionCounter.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(actionCounter.increment());
  };

  const decrementHandler = () => {
    dispatch(actionCounter.decrement());
  };

  const increaseHandler = () => {
    dispatch(actionCounter.increase(10)); // toolkit creates here an {type: 'uniqueId', payload: 10 }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increase by 5</button>
      </div>
    </main>
  );
};

export default Counter;
