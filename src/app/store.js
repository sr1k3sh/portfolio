import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import appReducer from '../AppSlice';
import menuReducer from '../features/body/BodySlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    colorState: appReducer,
    menuState: menuReducer
  },
});
