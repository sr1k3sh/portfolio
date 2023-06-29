import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import appReducer from './AppSlice'
import menuReducer from './features/body/BodySlice'
import contactReducer from './features/contact/contactSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    colorState: appReducer,
    menuState: menuReducer,
    contact: contactReducer
  },
})