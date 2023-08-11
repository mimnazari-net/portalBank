import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { decreament, increament } from './counterSlice';

function Counter() {
    const dispatch = useDispatch();
  const counter = useSelector((state : RootState) => state.counterSlice.value);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increament())}>increment</button>
      <button onClick={() => dispatch(decreament())}>decrement</button>
    </div>
  )
}

export default Counter