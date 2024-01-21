import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Store/CounterReducer";

const Count = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.Counter);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(parseInt(e.target.number.value)));
    e.target.reset()
  };
  return (
    <div className="card">
      <h1>{value}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <form onSubmit={handleSubmit}>
          <input type="number" name="number" />
          <button type="submit">incrementByAmount</button>
        </form>
      </div>
    </div>
  );
};

export default Count;
