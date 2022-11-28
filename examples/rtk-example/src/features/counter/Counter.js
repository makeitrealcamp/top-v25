import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

import styles from './Counter.module.css';

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const counter = useSelector(selectCount);
  const isLoading = useSelector(state => state.counter.status === 'loading');
  const dispatch = useDispatch();

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {
        isLoading ? (
          <div>
            <h1>Loading</h1>
          </div>
        ) : null
      }
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => { dispatch(decrement()) }}
        >
          -
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => { dispatch(increment()) }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => { dispatch(incrementByAmount(incrementValue)) }}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => { dispatch(incrementAsync(incrementValue)) }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => { dispatch(incrementIfOdd(incrementValue)) }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
