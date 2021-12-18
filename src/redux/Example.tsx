import { useDispatch } from 'react-redux';
import { increment, incrementByAmount } from './slice/counterSlice';
import { useStore } from '../hooks/useStore';

export const Example = () => {
  const store = useStore();
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Decrement</button>
      <div>{store.counter.value}</div>
    </div>
  );
};
