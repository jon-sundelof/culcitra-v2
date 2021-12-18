import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useStore = (value?: RootState) => {
  const store = useSelector((state: RootState) => state);
  return store;
};
