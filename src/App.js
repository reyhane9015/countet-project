import './App.css';
import { useSelector , useDispatch } from "react-redux";
import { increment, decrement, reset } from './features/counter/counterSlice';



const App = () => {

const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();


return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default App;
