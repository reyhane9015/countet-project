import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addByAmount,
  reset,
  incrementAsync,
  selectDoubleCount,
} from './features/counter/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const doubleCount = useSelector(selectDoubleCount); // Derived state
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const handleInputChange = (e) => setAmount(Number(e.target.value) || 0);


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      <h1>Redux Toolkit Enhanced Counter</h1>
      <h2>Count: {count}</h2>
      <h2>Double Count (Derived State): {doubleCount}</h2>

      <button onClick={() => dispatch(increment())} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '5px' }}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())} style={{ margin: '5px' }}>
        Reset
      </button>

      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          value={amount}
          onChange={handleInputChange}
          placeholder="Enter amount"
        />
        <button
          onClick={() => dispatch(addByAmount(amount))}
          style={{ marginLeft: '10px' }}
        >
          Add by Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(amount))}
          style={{ marginLeft: '10px' }}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Loading...' : 'Async Increment'}
        </button>
      </div>
    </div>
  );
};

export default App;
